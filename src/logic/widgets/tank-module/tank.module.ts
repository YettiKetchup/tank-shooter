import { StorageKey } from '@shared/data';
import { AimingChain, OnShootChain, StartShootChain } from './chains';
import { ProjectileComponent } from './components';

import {
  ButtonHoldedComponent,
  ButtonPointerDown,
} from '@shared/modules/interactive-module';

import {
  AmmoCountComponent,
  ShootButtonComponent,
  ShootIndicatorComponent,
} from '@modules/shoot-ui-module/components';

import {
  EntitiesCollection,
  Entity,
  EntityStorage,
  EntitySubject,
  Module,
  includesPipe,
} from 'mysh-pixi';
import { OnProjectileCreate } from './chains/on-projectile-create.chain';

export class TankModule extends Module {
  private _onProjectileCreate = EntitySubject.onAdd(ProjectileComponent);
  private _shootButtonPressed$ = EntitySubject.onAdd(ButtonPointerDown);
  private _onIndicatorFills$ = EntitySubject.onChange(ShootIndicatorComponent);
  private _shootButtonUnpressed$ = EntitySubject.onRemove(
    ButtonHoldedComponent
  );

  init(): void {
    const collection = EntityStorage.combine('tanks', [
      StorageKey.Game,
      StorageKey.UI,
    ]);

    this.handleProjectileCreation(collection);
    this.handleShootButtonClick(collection);
    this.handleAiming(collection);
    this.handleShoot(collection);
  }

  destroy(): void {
    this._onProjectileCreate.unsubscribe();
    this._shootButtonPressed$.unsubscribe();
    this._onIndicatorFills$.unsubscribe();
    this._shootButtonUnpressed$.unsubscribe();
  }

  private handleProjectileCreation(collection: EntitiesCollection): void {
    this._onProjectileCreate.subscribe(() => {
      OnProjectileCreate(collection).execute();
    });
  }

  private handleShootButtonClick(collection: EntitiesCollection): void {
    this._shootButtonPressed$.pipe(includesPipe(AmmoCountComponent));
    this._shootButtonPressed$.subscribe(() => {
      StartShootChain(collection).execute();
    });
  }

  private handleAiming(collection: EntitiesCollection): void {
    this._onIndicatorFills$.subscribe((entity: Entity) => {
      const indicator = entity.get(ShootIndicatorComponent);
      AimingChain(collection, indicator).execute();
    });
  }

  private handleShoot(collection: EntitiesCollection): void {
    this._shootButtonUnpressed$.pipe(includesPipe(ShootButtonComponent));

    this._shootButtonUnpressed$.subscribe((entity) => {
      const shootButton = entity.get(ShootButtonComponent);
      OnShootChain(collection, shootButton).execute();
    });
  }
}
