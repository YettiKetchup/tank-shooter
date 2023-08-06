import { Container } from 'pixijs';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { StorageKey } from '@shared/data';
import { ShootButtonView } from './shoot-button.view';

import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@shared/resize-module';

export const ShootButtonsGroup = () => {
  const relativePositionLandscape = new ARPositionLandscape({
    xAboveAR: 0.9,
    yAboveAR: 0,
    xBellowAR: 0.9,
    yBellowAR: 0,
  });

  const relativePositionPortrait = new ARPositionPortrait({
    xAboveAR: 0,
    yAboveAR: 0.85,
    xBellowAR: 0,
    yBellowAR: 0.85,
  });

  const collection = EntityStorage.get(StorageKey.UI);

  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(new PivotLandscapeComponent(1, 0, true))
    .withComponent(new PivotPortraitComponent(0, 1, true))
    .withComponent(relativePositionLandscape)
    .withComponent(relativePositionPortrait)

    .withNode(ShootButtonView(collection, 'small'))
      .asEntity(collection)
      .withComponent(new PositionLandscapeComponent(0, -90))
      .withComponent(new PositionPortraitComponent(-70, 0))
      

    .withNode(ShootButtonView(collection, 'medium'))

    .withNode(ShootButtonView(collection, 'big'))
      .asEntity(collection)
      .withComponent(new PositionLandscapeComponent(0, 90))
      .withComponent(new PositionPortraitComponent(70, 0))
        
  .build();
};
