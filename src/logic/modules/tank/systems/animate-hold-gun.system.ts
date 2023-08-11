import { Sprite } from '@pixi/sprite';
import { ShootIndicatorComponent } from '@systems/power-bar/components';
import { TankComponent } from '@views/tank';
import {
  Entity,
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, ShootIndicatorComponent)
@Includes(Sprite, TankComponent)
export class AnimateHoldGunSystem extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    const { value } = data.get(ShootIndicatorComponent);

    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0];
      gun.y = value * 10;
    });
  }
}
