import { Sprite } from '@pixi/sprite';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ButtonComponent, DisabledButtonComponent } from '../components';

@Includes(ButtonComponent, DisabledButtonComponent, Sprite)
export class DisableButtonSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.disabled;
      sprite.interactive = false;
    });
  }
}
