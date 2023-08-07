import { Sprite } from 'pixijs';
import { ShootIndicatorComponent } from '../components';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

@Includes(Sprite, ShootIndicatorComponent)
export class ChangeIndicatorColor extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const { value, minColor, midColor, maxColor } = entity.get(
        ShootIndicatorComponent
      );
      const view = entity.get(Sprite).children[0] as Sprite;

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
