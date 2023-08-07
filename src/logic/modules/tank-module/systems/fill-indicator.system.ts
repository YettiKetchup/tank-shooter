import { Sprite } from 'pixijs';
import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';
import { ShootIndicatorComponent } from '../components';

@Includes(Sprite, ShootIndicatorComponent)
export class FillIndicatorSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const indicator = entity.get(ShootIndicatorComponent);
      const view = entity.get(Sprite).children[0];
      console.log(indicator);
    });
  }
}
