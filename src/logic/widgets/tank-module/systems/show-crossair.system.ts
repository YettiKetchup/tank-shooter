import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { CrossairComponent } from '../components';

@Includes(Sprite, CrossairComponent)
export class ShowCrossairSystem extends System {
  public readonly show: boolean = true;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      sprite.alpha = this.show ? 1 : 0;
    });
  }
}
