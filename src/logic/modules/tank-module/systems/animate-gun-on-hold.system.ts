import { Sprite } from 'pixijs';
import { PlayerTankComponent } from '../components';
import { clamp } from '@shared/utils';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

@Includes(Sprite, PlayerTankComponent)
export class AnimateGunkOnHold extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const gun = entity.get(Sprite).children[0];

      gun.y += 0.1;
      gun.y = clamp(gun.y, 0, 10);
    });
  }
}
