import { Sprite } from '@pixi/sprite';
import { ShootIndicatorComponent } from '../components';
import { Filtered, Includes, System, OnChanges, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Changed, ShootIndicatorComponent)
@Includes(Sprite, ShootIndicatorComponent)
export class PowerBarColor extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const view = entity.get(Sprite).children[0] as Sprite;
      const { value, minColor, midColor, maxColor } = entity.get(
        ShootIndicatorComponent
      );

      if (value <= 0.3) {
        view.tint = minColor;
      } else if (value > 0.3 && value <= 0.6) {
        view.tint = midColor;
      } else if (value > 0.6) {
        view.tint = maxColor;
      }
    });
  }
}
