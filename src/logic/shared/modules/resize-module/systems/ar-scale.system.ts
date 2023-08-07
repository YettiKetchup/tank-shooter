import { Container } from 'pixijs';

import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { ARScaleLandscape, ARScalePortrait } from '../components';
import { PixiOrientation } from '../data/types';
import { ResizeModuleConfig } from '../data/resize-module.config';
import { getAspectRatio } from '../utils';

@Includes(ARScaleLandscape, ARScalePortrait, Container)
export class ARScaleSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    const { CURRENT_WIDTH, CURRENT_HEIGHT, ASPECT_RATIO } = ResizeModuleConfig;
    const currentAspect = getAspectRatio(CURRENT_WIDTH, CURRENT_HEIGHT);

    entities.loop((entity) => {
      const container = entity.get(Container);

      const scale =
        this._orientation === 'landscape'
          ? entity.get(ARScaleLandscape)
          : entity.get(ARScalePortrait);

      const designResolution =
        this._orientation === 'landscape'
          ? ResizeModuleConfig.LANDSCAPE
          : ResizeModuleConfig.PORTRAIT;

      const comparableAspect = scale.data.aspectRatio
        ? scale.data.aspectRatio
        : ASPECT_RATIO;

      let x = 0;
      let y = 0;

      if (comparableAspect > currentAspect) {
        //BellowAR
        x = scale.data.xBellowAR;
        y = scale.data.yBellowAR;
      } else {
        //AboveAR
        x = scale.data.xAboveAR;
        y = scale.data.yAboveAR;
      }

      const delta = CURRENT_WIDTH / designResolution.width;

      container.scale.x = x * delta;
      container.scale.y = y * delta;
    });
  }
}
