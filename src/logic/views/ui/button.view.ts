import { AssetKey } from '@shared/data';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  CursorTypeComponent,
} from '@shared/interactive-module';

import { AssetsLoader, EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const ButtonView = (collection: EntitiesCollection, icon: string) => {
  const buttonComponent = new ButtonComponent(
    AssetKey.Button,
    AssetKey.ButtonHovered,
    AssetKey.ButtonPressed,
    AssetKey.ButtonDisabled
  );

  const iconTexture = AssetsLoader.Textures.get(icon);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(buttonComponent)
      .withComponent(new ButtonShiftedClick(0, 2))
      .withComponent(new CursorTypeComponent('pointer'))
      .withComponent(new ButtonHoldableComponent())
    .withAnchor(0.5, 0.5)
    .withChildren()
      .withNode(Sprite)
        .withTexture(iconTexture)
        .withAnchor(0.5, 0.5)
        .withScale(0.7, 0.7)
        .withPositionY(-2)
    .endChildren()
  .build();
};
