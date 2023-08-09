import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { CrossairComponent } from '../components';

@Includes(Sprite, CrossairComponent)
export class MoveCrossairSystem extends System {
  public readonly distanceDelta: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const crossair = entity.get(CrossairComponent);
      const view = entity.get(Sprite);

      view.position.y = -crossair.maxDistance * this.distanceDelta;
    });
  }
}
