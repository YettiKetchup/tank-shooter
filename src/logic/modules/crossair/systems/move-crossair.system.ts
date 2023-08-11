import { Sprite } from '@pixi/sprite';
import { CrossairComponent } from '@systems/crossair';
import { ShootIndicatorComponent } from '@systems/power-bar/components';
import {
  Filtered,
  Includes,
  System,
  OnChanges,
  WatchFor,
  Entity,
} from 'mysh-pixi';

@OnChanges(WatchFor.Changed, ShootIndicatorComponent)
@Includes(Sprite, CrossairComponent)
export class MoveCrossairSystem extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { value } = data.get(ShootIndicatorComponent);
      const crossair = entity.get(CrossairComponent);
      const view = entity.get(Sprite);

      view.position.y = -crossair.maxDistance * value;
    });
  }
}
