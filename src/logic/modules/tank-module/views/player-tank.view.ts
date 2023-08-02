import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { TankView } from './tank.view';
import { PlayerTankComponent } from '../components/player-tank.component';
import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
} from '@shared/resize-module';

export const PlayerTankView = (collection: EntitiesCollection) => {
  const relativePositionLandscape = new ARPositionLandscape({
    yAboveAR: 0.8,
    yBellowAR: 0.8,
    xAboveAR: 0,
    xBellowAR: 0,
  });

  const relativePositionPortrait = new ARPositionPortrait({
    yAboveAR: 0.8,
    yBellowAR: 0.8,
    xAboveAR: 0,
    xBellowAR: 0,
  });

  //prettier-ignore
  return new ViewBuilder(TankView('red'))
    .asEntity(collection)
      .withComponent(new PlayerTankComponent())
      .withComponent(new PivotLandscapeComponent(0, 1, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
      .withComponent(relativePositionLandscape)
      .withComponent(relativePositionPortrait)
  .build();
};
