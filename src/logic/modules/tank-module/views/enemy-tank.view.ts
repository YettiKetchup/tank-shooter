import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { TankView } from './tank.view';

import {
  ARPositionLandscape,
  ARPositionPortrait,
  ARScaleLandscape,
  ARScalePortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
} from '@shared/resize-module';

export const EnemyTankView = () => {
  const relativePositionLandscape = new ARPositionLandscape({
    yAboveAR: -0.8,
    yBellowAR: -0.8,
    xAboveAR: 0,
    xBellowAR: 0,
  });

  const relativePositionPortrait = new ARPositionPortrait({
    yAboveAR: -0.8,
    yBellowAR: -0.8,
    xAboveAR: 0,
    xBellowAR: 0,
  });

  const scaleLandscape = new ARScaleLandscape({
    yAboveAR: 1,
    yBellowAR: 1.6,
    xAboveAR: 1,
    xBellowAR: 1.6,
  });

  const scalePortrait = new ARScalePortrait({
    yAboveAR: 1.6,
    yBellowAR: 1,
    xAboveAR: 1.6,
    xBellowAR: 1,
  });

  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
    .withPosition(0, -300)
    .asEntity(EntityStorage.get('game'))
      .withComponent(new PivotLandscapeComponent(0, 1, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
      .withComponent(relativePositionLandscape)
      .withComponent(relativePositionPortrait)
      .withComponent(scaleLandscape)
      .withComponent(scalePortrait)
    .withAngle(180)
  .build();
};
