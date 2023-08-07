import { ButtonPointerDown, DisabledButtonComponent } from '@shared/modules';
import { AmmoCountComponent } from '../components';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

@Includes(AmmoCountComponent)
export class BlockAmmoButtons extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      if (entity.has([ButtonPointerDown])) return;

      const entity$ = entity.observable();
      entity$.add(new DisabledButtonComponent());
    });
  }
}
