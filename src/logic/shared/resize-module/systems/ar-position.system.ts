import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { ARPositionLandscape, ARPositionPortrait } from '../components';
import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';
import { ResizeModule } from '../resize.module';

@Includes(ARPositionLandscape, ARPositionPortrait, Container)
export class ARPositionSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    const { width, height, aspectRatio } = ResizeModule;

    entities.loop((entity) => {
      const container = entity.get(Container);

      const position =
        this._orientation === 'landscape'
          ? entity.get(ARPositionLandscape)
          : entity.get(ARPositionPortrait);

      const currentAspect = this.aspectRatio(width, height);

      const comparableAspect = position.data.aspectRatio
        ? position.data.aspectRatio
        : aspectRatio;

      let x = 0;
      let y = 0;

      if (comparableAspect > currentAspect) {
        //BellowAR
        x = position.data.xBellowAR;
        y = position.data.yBellowAR;
      } else {
        //AboveAR
        x = position.data.xAboveAR;
        y = position.data.yAboveAR;
      }

      x = (width * x) / 2;
      y = (height * y) / 2;

      container.position.set(x, y);
    });
  }

  private aspectRatio(width: number, height: number): number {
    return width > height ? width / height : height / width;
  }
}
