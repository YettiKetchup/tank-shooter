import { Sprite } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import {
  ButtonComponent,
  ButtonShiftedClick,
  DisabledButtonComponent,
} from '../components';

@Includes(ButtonComponent, ButtonShiftedClick, Sprite)
export class ButtonClickShiftSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const { x, y } = entity.get(ButtonShiftedClick);

      sprite.on('pointerdown', () => {
        if (entity.has([DisabledButtonComponent])) return;
        sprite.x += x;
        sprite.y += y;
      });

      sprite.on('pointerup', () => {
        if (entity.has([DisabledButtonComponent])) return;
        sprite.x -= x;
        sprite.y -= y;
      });
    });
  }
}
