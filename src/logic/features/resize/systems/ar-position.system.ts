import { Container } from '@pixi/display';
import { getAspectRatio, orientation } from '../utils';
import { ResizeConfig } from '../data/resize.config';
import { ARPositionLandscape, ARPositionPortrait } from '../components';
import { Filtered, System, Includes, OnEvent } from 'mysh-pixi';
import { ResizeEvent } from '../events';

@OnEvent(ResizeEvent)
@Includes(ARPositionLandscape, ARPositionPortrait, Container)
export class ARPositionSystem extends System {
  protected onExecute(filtered: Filtered): void {
    const { currentWidth, currentHeight, aspectRatio } = ResizeConfig;
    const currentAspect = getAspectRatio(currentWidth, currentHeight);

    filtered.loop((entity) => {
      const container = entity.get(Container);

      const position =
        orientation() === 'landscape'
          ? entity.get(ARPositionLandscape)
          : entity.get(ARPositionPortrait);

      const comparableAspect = position.data.aspectRatio
        ? position.data.aspectRatio
        : aspectRatio;

      let x =
        comparableAspect > currentAspect
          ? position.data.xBellowAR
          : position.data.xAboveAR;

      let y =
        comparableAspect > currentAspect
          ? position.data.yBellowAR
          : position.data.yAboveAR;

      x = (currentWidth * x) / 2;
      y = (currentHeight * y) / 2;

      container.position.set(x, y);
    });
  }
}
