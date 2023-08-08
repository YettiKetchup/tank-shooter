import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { CrossairComponent } from '../components';
import { Sprite } from 'pixijs';

@Includes(Sprite, CrossairComponent)
export class MoveCrossairSystem extends System {
  public readonly distanceDelta: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const crossair = entity.get(CrossairComponent);
      const view = entity.get(Sprite);

      view.position.y = -800 * this.distanceDelta;
      crossair.distanceDelta = this.distanceDelta;
    });
  }
}
