import { Container } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ARPositionLandscape, ARPositionPortrait } from '../components';
import { PixiOrientation } from '../data/types';
import { ResizeModuleConfig } from '../data/resize-module.config';
import { getAspectRatio } from '../utils';

@Includes(ARPositionLandscape, ARPositionPortrait, Container)
export class ARPositionSystem extends System {
  public readonly orientation: PixiOrientation = 'landscape';

  protected onExecute(entities: Filtered): void {
    const { CURRENT_WIDTH, CURRENT_HEIGHT, ASPECT_RATIO } = ResizeModuleConfig;
    const currentAspect = getAspectRatio(CURRENT_WIDTH, CURRENT_HEIGHT);

    entities.loop((entity) => {
      const container = entity.get(Container);

      const position =
        this.orientation === 'landscape'
          ? entity.get(ARPositionLandscape)
          : entity.get(ARPositionPortrait);

      const comparableAspect = position.data.aspectRatio
        ? position.data.aspectRatio
        : ASPECT_RATIO;

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

      x = (CURRENT_WIDTH * x) / 2;
      y = (CURRENT_HEIGHT * y) / 2;

      container.position.set(x, y);
    });
  }
}
