import { ShootIndicatorComponent } from '@modules/shoot-ui-module/components';
import { StorageKey } from '@shared/data';
import { OnSHootHoldChain } from './chains';
import {
  EntitiesCollection,
  EntityStorage,
  EntitySubject,
  Module,
} from 'mysh-pixi';

export class TankModule extends Module {
  private _onIndicatorFills$ = EntitySubject.onChange(ShootIndicatorComponent);

  init(): void {
    const collection = EntityStorage.get(StorageKey.Game);
    this.handleShoot(collection);
  }

  destroy(): void {
    this._onIndicatorFills$.unsubscribe();
  }

  private handleShoot(collection: EntitiesCollection): void {
    this._onIndicatorFills$.subscribe((entity) => {
      const indicator = entity.get(ShootIndicatorComponent);
      OnSHootHoldChain(collection, indicator).execute();
    });
  }
}
