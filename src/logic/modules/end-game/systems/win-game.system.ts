import { EndGameWatcherComponent, WinGameComponent } from '../components';
import { HealthComponent } from '@features/damage';
import { EnemyTankComponent } from '@widgets/tank';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, HealthComponent, includesPipe(EnemyTankComponent))
@Includes(EndGameWatcherComponent)
export class WinGameSystem extends System {
  protected onExecute(filtered: Filtered, data: Entity): void {
    filtered.loop((entity) => {
      const { value } = data.get(HealthComponent);

      if (value <= 0) {
        const entity$ = entity.observable();
        entity$.add(new WinGameComponent());
      }
    });
  }
}
