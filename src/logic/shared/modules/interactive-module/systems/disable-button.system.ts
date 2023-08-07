import { Sprite } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { ButtonComponent, DisabledButtonComponent } from '../components';

@Includes(ButtonComponent, DisabledButtonComponent, Sprite)
export class DisableButtonSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.disabled;
      sprite.interactive = false;
    });
  }
}
