import { Sprite } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { DisabledButtonComponent } from '../components';

@Includes(DisabledButtonComponent, Sprite)
export class DisableButtonSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(DisabledButtonComponent);

      sprite.texture = button.disabled;
      sprite.interactive = false;
    });
  }
}
