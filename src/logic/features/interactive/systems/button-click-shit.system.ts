import { Sprite } from '@pixi/sprite';

import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

import {
  ButtonComponent,
  ButtonShiftedClick,
  DisabledButtonComponent,
} from '../components';

@OnHook(Lifecycle.Init)
@Includes(ButtonComponent, ButtonShiftedClick, Sprite)
export class ButtonClickShift extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonShiftedClick);

      sprite.on('pointerdown', () => {
        if (entity.has([DisabledButtonComponent])) return;
        this.shift(sprite, button);
      });

      sprite.on('pointerup', () => {
        this.reset(sprite, button);
      });

      sprite.on('pointerleave', () => {
        if (button.shifted) {
          this.reset(sprite, button);
        }
      });
    });
  }

  private shift(sprite: Sprite, button: ButtonShiftedClick): void {
    sprite.x += button.x;
    sprite.y += button.y;
    button.shifted = true;
  }

  private reset(sprite: Sprite, button: ButtonShiftedClick): void {
    sprite.x -= button.x;
    sprite.y -= button.y;
    button.shifted = false;
  }
}
