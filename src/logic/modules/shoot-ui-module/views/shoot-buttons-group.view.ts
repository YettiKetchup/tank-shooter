import { Container } from '@pixi/display';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { StorageKey } from '@shared/data';
import { ShootButtonsFactory } from './buttons/shoot-buttons-factory.view';
import {
  ARPositionLandscape,
  ARPositionPortrait,
  PivotLandscapeComponent,
  PivotPortraitComponent,
} from '@shared/modules/resize-module';

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

  // prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(new PivotLandscapeComponent(1, 0, true))
    .withComponent(new PivotPortraitComponent(0, 1, true))
    .withComponent(relativePositionLandscape)
    .withComponent(relativePositionPortrait)
    .withFactory(ShootButtonsFactory, collection)
  .build();
};
