import { AssetKey } from '@shared/data';
import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@shared/resize-module';
import { ButtonView } from '@views/ui';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const ShootButtonsView = (collection: EntitiesCollection) => {
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

  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
      .withComponent(relativePositionLandscape)
      .withComponent(relativePositionPortrait)
      .withComponent(new PivotLandscapeComponent(1, 0, true))
      .withComponent(new PivotPortraitComponent(0, 1, true))
    .withChildren()
      .withNode(ButtonView(collection, AssetKey.BulletRedSmall))
        .asEntity(collection)
          .withComponent(new PositionLandscapeComponent(0, 70))
          .withComponent(new PositionPortraitComponent(-70, 0))

      .withNode(ButtonView(collection, AssetKey.BulletRedMedium))
      
      .withNode(ButtonView(collection, AssetKey.BulletRedBig))
        .asEntity(collection)
          .withComponent(new PositionLandscapeComponent(0, -70))
          .withComponent(new PositionPortraitComponent(70, 0))
    .endChildren()
  .build();
};
