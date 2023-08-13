import { AmmoCountComponent } from '@entities/ui/shoot-button';
import { EndGameWatcherComponent, LooseGameComponent } from '../components';
import { Filtered, Includes, OnChanges, System, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Changed, AmmoCountComponent)
@Includes(AmmoCountComponent)
export class LooseGameSystem extends System {
  protected onExecute(filtered: Filtered): void {
    const isEmpty = filtered.list.every(
      (entity) => entity.get(AmmoCountComponent).value === 0
    );

    if (isEmpty) {
      const endGameEntity = this.collection.get({
        includes: [EndGameWatcherComponent],
      }).list[0];

      endGameEntity.observable().add(new LooseGameComponent());
    }
  }
}
