import { Container, Text } from 'pixijs';
import { ButtonPointerDown } from '@shared/modules';
import { AmmoCountComponent } from '../components';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

@Includes(Container, AmmoCountComponent, ButtonPointerDown)
export class DecreaseAmmoCount extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const ammo = entity.get(AmmoCountComponent);
      const container = entity.get(Container);
      const label = container.children.find(
        (child) => child instanceof Text
      ) as Text;

      ammo.value -= 1;

      label.text = `${ammo.value}x`;
    });
  }
}
