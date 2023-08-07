import { Container } from 'pixijs';
import { ChangableDisabledAlpha, DisabledButtonComponent } from '../components';

import {
  Includes,
  PixiEntity,
  System,
  SystemEntitiesCollection,
} from 'mysh-pixi';

@Includes(Container, ChangableDisabledAlpha)
export class AlphaDisabledChildren extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const alpha = entity.get(ChangableDisabledAlpha);
      const container = entity.get(Container);

      container.children.forEach((child) => {
        child.alpha = entity.has([DisabledButtonComponent])
          ? alpha.onDisable
          : alpha.onEnable;
      });
    });
  }
}
