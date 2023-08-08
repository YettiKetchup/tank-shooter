import { Sprite } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';

import {
  ButtonComponent,
  ButtonShiftedClick,
  DisabledButtonComponent,
} from '../components';

@Includes(ButtonComponent, ButtonShiftedClick, Sprite)
export class ButtonClickShiftSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const { x, y } = entity.get(ButtonShiftedClick);

      sprite.on('pointerdown', () => {
        if (entity.has([DisabledButtonComponent])) return;
        sprite.x += x;
        sprite.y += y;
      });

      sprite.on('pointerup', () => {
        sprite.x -= x;
        sprite.y -= y;
      });
    });
  }
}
