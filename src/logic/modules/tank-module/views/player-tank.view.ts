import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { TankView } from './tank.view';
import { PlayerTankComponent } from '../components/player-tank.component';
import {
  PivotLandscapeComponent,
  PivotPortraitComponent,
  PositionLandscapeComponent,
  PositionPortraitComponent,
  RelativePositionLandscape,
  RelativePositionPortrait,
  RelativeScaleLandscape,
  RelativeScalePortrait,
} from '@shared/resize-module';

export const PlayerTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(TankView('red'))
    .asEntity(collection)
      .withComponent(new PlayerTankComponent())
      .withComponent(new RelativePositionLandscape(0, 300))
      .withComponent(new RelativePositionPortrait(0, 600))
      .withComponent(new PivotLandscapeComponent(0, 1, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
      .withComponent(new RelativeScaleLandscape(1, 1))
      .withComponent(new RelativeScalePortrait(2, 2))
  .build();
};
