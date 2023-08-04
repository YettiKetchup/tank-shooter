import { Container } from 'pixijs';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';

import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@shared/resize-module';

import { ButtonView } from '@views/ui';
import { AssetKey, StorageKey } from '@shared/data';
import { ShootButtonView } from './shoot-button.view';

export const ShootButtonsView = () => {
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
    .withNode(ShootButtonView(AssetKey.BulletRedSmall))
      .asEntity(collection)
        .withComponent(new PivotLandscapeComponent(1, 0, true))
        .withComponent(new PivotPortraitComponent(0, 1, true))
        .withComponent(relativePositionLandscape)
        .withComponent(relativePositionPortrait)
        
    
    
    // .withChildren()
    //   .withNode(ButtonView(collection, AssetKey.BulletRedSmall))
    //     .asEntity(collection)
    //       .withComponent(new PositionLandscapeComponent(0, 70))
    //       .withComponent(new PositionPortraitComponent(-70, 0))

    //   .withNode(ButtonView(collection, AssetKey.BulletRedMedium))

    //   .withNode(ButtonView(collection, AssetKey.BulletRedBig))
    //     .asEntity(collection)
    //       .withComponent(new PositionLandscapeComponent(0, -70))
    //       .withComponent(new PositionPortraitComponent(70, 0))
    // .endChildren()
  .build();
};
