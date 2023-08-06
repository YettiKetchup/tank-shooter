import { Container } from 'pixijs';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { StorageKey } from '@shared/data';

import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@shared/resize-module';
import { ShootButtonsFactory } from './shoot-buttons-factory.view';
import { ShootButtonView } from './shoot-button.view';

export const ShootButtonsGroup = () => {
  const collection = EntityStorage.get(StorageKey.UI);

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

  const buttonsGroup = new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(new PivotLandscapeComponent(1, 0, true))
    .withComponent(new PivotPortraitComponent(0, 1, true))
    .withComponent(relativePositionLandscape)
    .withComponent(relativePositionPortrait)
    .withFactory(ShootButtonsFactory, collection);

  return buttonsGroup.build();
};
