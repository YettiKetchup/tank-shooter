import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { TankView } from './tank.view';

import {
  ARPositionLandscape,
  ARPositionPortrait,
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

  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
    .withPosition(0, -300)
    .asEntity(EntityStorage.get('game'))
      .withComponent(new PivotLandscapeComponent(0, 1, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
      .withComponent(relativePositionLandscape)
      .withComponent(relativePositionPortrait)
    .withAngle(180)
  .build();
};
