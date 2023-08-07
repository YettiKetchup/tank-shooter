import { Sprite } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
  Excludes,
} from 'mysh-pixi';

import { ButtonComponent, DisabledButtonComponent } from '../components';

@Includes(ButtonComponent, Sprite)
@Excludes(DisabledButtonComponent)
export class EnableButtonSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const button = entity.get(ButtonComponent);

      sprite.texture = button.idle;
      sprite.interactive = true;
    });
  }
}
