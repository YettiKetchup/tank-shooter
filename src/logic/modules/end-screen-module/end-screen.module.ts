import { StorageKey } from '@shared/data';
import { EnemyTankComponent, TankComponent } from '@widgets/tank-module';
import { EnemyDefatedChain } from './chains';
import { tankDefeatedPipe } from './pipes';
import {
  EntitiesCollection,
  EntityStorage,
  EntitySubject,
  Module,
  includesPipe,
} from 'mysh-pixi';

export class EndScreenModule extends Module {
  private _onTankDamaged$ = EntitySubject.onChange(TankComponent);

  init(): void {
    const collection = EntityStorage.get(StorageKey.UI);
    this.onTankDamaged(collection);
  }

  destroy(): void {
    this._onTankDamaged$.unsubscribe();
  }

  private onTankDamaged(collection: EntitiesCollection): void {
    this._onTankDamaged$.pipe(includesPipe(EnemyTankComponent));
    this._onTankDamaged$.pipe(tankDefeatedPipe);

    this._onTankDamaged$.subscribe(() => {
      EnemyDefatedChain().execute(collection);
    });
  }
}
