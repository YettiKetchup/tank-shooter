import { AssetKey } from '@shared/data';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  CursorTypeComponent,
} from '@shared/interactive-module';

import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const ButtonView = (collection: EntitiesCollection) => {
  const buttonComponent = new ButtonComponent(
    AssetKey.Button,
    AssetKey.ButtonHovered,
    AssetKey.ButtonPressed
  );

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(buttonComponent)
      .withComponent(new ButtonShiftedClick(0, 5))
      .withComponent(new CursorTypeComponent('pointer'))
      .withComponent(new ButtonHoldableComponent())
  .build();
};
