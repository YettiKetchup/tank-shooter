import { Container } from '@pixi/display';
import { getAspectRatio, orientation } from '../utils';
import { ResizeConfig } from '../data/resize.config';
import { ARScaleLandscape, ARScalePortrait } from '../components';
import { Filtered, System, Includes, OnEvent } from 'mysh-pixi';
import { ResizeEvent } from '../events';

@OnEvent(ResizeEvent)
@Includes(ARScaleLandscape, ARScalePortrait, Container)
export class ARScaleSystem extends System {
  protected onExecute(filtered: Filtered): void {
    const { currentWidth, currentHeight, aspectRatio } = ResizeConfig;
    const currentAspect = getAspectRatio(currentWidth, currentHeight);

    filtered.loop((entity) => {
      const container = entity.get(Container);

      const scale =
        orientation() === 'landscape'
          ? entity.get(ARScaleLandscape)
          : entity.get(ARScalePortrait);

      const designResolution = ResizeConfig[orientation()];

      const comparableAspect = scale.data.aspectRatio
        ? scale.data.aspectRatio
        : aspectRatio;

      let x =
        comparableAspect > currentAspect
          ? scale.data.xBellowAR
          : scale.data.yBellowAR;
      let y =
        comparableAspect > currentAspect
          ? scale.data.yBellowAR
          : scale.data.yAboveAR;

      const delta = currentWidth / designResolution.width;

      container.scale.x = x * delta;
      container.scale.y = y * delta;
    });
  }
}
