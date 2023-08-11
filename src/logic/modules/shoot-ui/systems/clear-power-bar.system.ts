import { Sprite } from '@pixi/sprite';
import { ShootIndicatorComponent } from '../../../systems/power-bar/components';
import { ProjectileFallComponent } from '@systems/projectile';
import { Filtered, Includes, OnChanges, System, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(Sprite, ShootIndicatorComponent)
export class ClearPowerBarSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const indicator$ = entity.get(ShootIndicatorComponent, true);
      const view = entity.get(Sprite).children[0];
      indicator$.value = 0;
      view.scale.x = indicator$.value;
    });
  }
}
