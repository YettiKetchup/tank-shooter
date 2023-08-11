import { ButtonComponent, DisabledButtonComponent } from '../components';
import { Sprite } from '@pixi/sprite';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Added, DisabledButtonComponent)
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
