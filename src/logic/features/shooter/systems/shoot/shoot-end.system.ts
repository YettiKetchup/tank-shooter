import { NeedShootComponent, ShootPowerComponent } from '@features/shooter';
import {
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  sleep,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, NeedShootComponent)
@Includes(NeedShootComponent, ShootPowerComponent)
export class ShootEndSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.parallel(async (entity) => {
      const entity$ = entity.observable();
      const power = entity.get(ShootPowerComponent);
      power.delta = 0;

      await sleep(500);
      entity$.remove(NeedShootComponent);
    });
  }
}
