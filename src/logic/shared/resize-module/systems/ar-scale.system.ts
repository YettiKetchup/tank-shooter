import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { ARScaleLandscape, ARScalePortrait } from '../components';
import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';
import { ResizeModule } from '../resize.module';

@Includes(ARScaleLandscape, ARScalePortrait, Container)
export class ARScaleSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    const { width, height, aspectRatio } = ResizeModule;

    entities.loop((entity) => {
      const container = entity.get(Container);

      const scale =
        this._orientation === 'landscape'
          ? entity.get(ARScaleLandscape)
          : entity.get(ARScalePortrait);

      const designResolution =
        this._orientation === 'landscape'
          ? ResizeModule.landscape
          : ResizeModule.portrait;

      const currentAspect = this.aspectRatio(width, height);

      const comparableAspect = scale.data.aspectRatio
        ? scale.data.aspectRatio
        : aspectRatio;

      let x = 0;
      let y = 0;

      if (comparableAspect > currentAspect) {
        //BellowAR
        x = scale.data.xBellowAR;
        y = scale.data.yBellowAR;
        console.log('BELOW', this._orientation);
      } else {
        //AboveAR
        x = scale.data.xAboveAR;
        y = scale.data.yAboveAR;
        console.log('ABOW', this._orientation);
      }

      const delta = width / designResolution.width;

      container.scale.x = x * delta;
      container.scale.y = y * delta;
    });
  }

  private aspectRatio(width: number, height: number): number {
    return width > height ? width / height : height / width;
  }
}
