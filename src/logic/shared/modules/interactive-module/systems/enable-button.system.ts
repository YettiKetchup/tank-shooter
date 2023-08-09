import { Sprite } from '@pixi/sprite';
import { System, Filtered, Includes, Excludes } from 'mysh-pixi';
import { ButtonComponent, DisabledButtonComponent } from '../components';

@Includes(ButtonComponent, Sprite)
@Excludes(DisabledButtonComponent)
export class EnableButtonSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.idle;
      sprite.interactive = true;
    });
  }
}
