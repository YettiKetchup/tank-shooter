import { StorageKey } from '@shared/data';
import { getProjectileData } from '@shared/utils';
import { ProjectileComponent, ProjectileFallComponent } from './components';

import {
  AimingChain,
  OnProjectileFallChain,
  OnShootChain,
  StartShootChain,
} from './chains';

import {
  ButtonHoldedComponent,
  ButtonPointerDown,
} from '@shared/modules/interactive-module';

import {
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

export class TankModule extends Module {
  private _onProjectileFall$ = EntitySubject.onAdd(ProjectileFallComponent);
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
    this.handleProjectileFall(collection);
    this.handleShootButtonClick(collection);
    this.handleAiming(collection);
    this.handleShoot(collection);
  }

  destroy(): void {
    this._onProjectileFall$.unsubscribe();
    this._shootButtonPressed$.unsubscribe();
    this._onIndicatorFills$.unsubscribe();
    this._shootButtonUnpressed$.unsubscribe();
  }

  private handleProjectileFall(collection: EntitiesCollection): void {
    this._onProjectileFall$.pipe(includesPipe(ProjectileComponent));
    this._onProjectileFall$.subscribe((entity: Entity) => {
      const projectile = entity.get(ProjectileComponent);
      OnProjectileFallChain(projectile).execute(collection);
    });
  }

  private handleShootButtonClick(collection: EntitiesCollection): void {
    this._shootButtonPressed$.pipe(includesPipe(ShootButtonComponent));
    this._shootButtonPressed$.subscribe((entity: Entity) => {
      const shootButton = entity.get(ShootButtonComponent);
      const projectile = getProjectileData(shootButton.type);

      StartShootChain(projectile).execute(collection);
    });
  }

  private handleAiming(collection: EntitiesCollection): void {
    this._onIndicatorFills$.subscribe((entity: Entity) => {
      const indicator = entity.get(ShootIndicatorComponent);
      AimingChain(indicator).execute(collection);
    });
  }

  private handleShoot(collection: EntitiesCollection): void {
    this._shootButtonUnpressed$.pipe(includesPipe(ShootButtonComponent));
    this._shootButtonUnpressed$.subscribe(() => {
      OnShootChain().execute(collection);
    });
  }
}
