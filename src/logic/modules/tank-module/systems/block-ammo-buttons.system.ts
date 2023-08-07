import { ButtonPointerDown, DisabledButtonComponent } from '@shared/modules';
import { AmmoCountComponent } from '../components';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
  Excludes,
} from 'mysh-pixi';

@Includes(AmmoCountComponent)
@Excludes(ButtonPointerDown)
export class BlockAmmoButtons extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const entity$ = entity.observable();

      if (!entity.has([DisabledButtonComponent])) {
        entity$.add(new DisabledButtonComponent());
      }
    });
  }
}
