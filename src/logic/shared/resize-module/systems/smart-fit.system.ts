import { Container } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { PixiOrientation } from '../data/types';
import { SmartFitComponent } from '../components';
import { ResizeModuleConfig } from '../data/resize-module.config';

@Includes(SmartFitComponent, Container)
export class SmartFitSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    const { CURRENT_WIDTH, CURRENT_HEIGHT } = ResizeModuleConfig;

    entities.loop((entity) => {
      const container = entity.get(Container);
      const zoneAspect = CURRENT_WIDTH / CURRENT_HEIGHT;
      const nodeAspect = container.width / container.height;

      const originalWidth = container.width;
      const originalHeight = container.height;

      let height = 0;
      let width = 0;

      if (nodeAspect > zoneAspect) {
        width = (CURRENT_HEIGHT * originalWidth) / originalHeight;
        height = CURRENT_HEIGHT;
      } else {
        height = (CURRENT_WIDTH * originalHeight) / originalWidth;
        width = CURRENT_WIDTH;
      }

      container.width = width;
      container.height = height;
    });
  }
}
