import { ButtonPointerDown } from '@shared/modules';
import { AmmoCountComponent } from '../components';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';
import { Container, Sprite } from 'pixijs';

@Includes(Container, AmmoCountComponent)
export class DecreaseAmmoCount extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    console.log(entities);

    entities.loop((entity) => {
      console.log(entity);
    });
  }
}
