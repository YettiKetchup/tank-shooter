import { Sprite } from '@pixi/sprite';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';

@Includes(Sprite, ShootIndicatorComponent)
export class ChangeIndicatorColor extends System {
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
