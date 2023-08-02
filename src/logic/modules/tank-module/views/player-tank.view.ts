import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { TankView } from './tank.view';
import { PlayerTankComponent } from '../components/player-tank.component';

import {
  ARPositionLandscape,
  ARPositionPortrait,
  ARScaleLandscape,
  ARScalePortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
} from '@shared/resize-module';

export const PlayerTankView = (collection: EntitiesCollection) => {
  const positionLandscape = new ARPositionLandscape({
    yAboveAR: 0.8,
    yBellowAR: 0.8,
    xAboveAR: 0,
    xBellowAR: 0,
  });

  const positionPortrait = new ARPositionPortrait({
    yAboveAR: 0.8,
    yBellowAR: 0.8,
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
  return new ViewBuilder(TankView('red'))
    .asEntity(collection)
      .withComponent(new PlayerTankComponent())
      .withComponent(new PivotLandscapeComponent(0, 1, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
      .withComponent(positionLandscape)
      .withComponent(positionPortrait)
      .withComponent(scaleLandscape)
      .withComponent(scalePortrait)
  .build();
};
