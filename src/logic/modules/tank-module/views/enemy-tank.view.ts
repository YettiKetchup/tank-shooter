import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { TankView } from './tank.view';
import {
  PivotLandscapeComponent,
  PivotPortraitComponent,
  RelativePositionLandscape,
  RelativePositionPortrait,
  RelativeScaleLandscape,
  RelativeScalePortrait,
} from '@shared/resize-module';

export const EnemyTankView = () => {
  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
    .withPosition(0, -300)
    .asEntity(EntityStorage.get('game'))
      // .withComponent(new RelativePositionLandscape(0, -300))
      // .withComponent(new RelativePositionPortrait(0, -600))
      // .withComponent(new PivotLandscapeComponent(0, 1, true))
      // .withComponent(new PivotPortraitComponent(0, 1, true))
      // .withComponent(new RelativeScaleLandscape(1, 1))
      // .withComponent(new RelativeScalePortrait(2, 2))
    .withAngle(180)
  .build();
};
