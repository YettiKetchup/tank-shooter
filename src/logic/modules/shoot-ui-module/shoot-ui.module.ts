import { StorageKey } from '@shared/data';
import { ShootButtonComponent } from './components';
import { OnShootEndChain, OnShootHoldChain, OnShootStartChain } from './chains';

import {
  ButtonHoldedComponent,
  ButtonPointerDown,
} from '@shared/modules/interactive-module';

import {
  EntitiesCollection,
  Entity,
  EntityStorage,
  EntitySubject,
  Module,
  includesPipe,
} from 'mysh-pixi';

export class ShootUIModule extends Module {
  private _shootButtonPressed$ = EntitySubject.onAdd(ButtonPointerDown);
  private _shootButtonHolded$ = EntitySubject.onChange(ButtonHoldedComponent);
  private _shootButtonUnhold$ = EntitySubject.onRemove(ButtonHoldedComponent);

  init(): void {
    const collection = EntityStorage.get(StorageKey.UI);
    this.handleshoot(collection);
  }

  destroy(): void {
    this._shootButtonPressed$.unsubscribe();
    this._shootButtonHolded$.unsubscribe();
    this._shootButtonUnhold$.unsubscribe();
  }

  private handleshoot(collection: EntitiesCollection): void {
    const includes = [ShootButtonComponent];

    this._shootButtonPressed$.pipe(includesPipe(...includes));
    this._shootButtonHolded$.pipe(includesPipe(...includes));
    this._shootButtonUnhold$.pipe(includesPipe(...includes));

    this._shootButtonPressed$.subscribe(() => {
      OnShootStartChain().execute(collection);
    });

    this._shootButtonHolded$.subscribe((entity: Entity) => {
      const shootButton = entity.get(ShootButtonComponent);
      OnShootHoldChain(shootButton).execute(collection);
    });

    this._shootButtonUnhold$.subscribe(() => {
      OnShootEndChain().execute(collection);
    });
  }
}
