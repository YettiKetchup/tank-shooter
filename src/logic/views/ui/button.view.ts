import { Sprite } from 'pixijs';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  CursorTypeComponent,
} from '@shared/interactive-module';

import {
  AssetsLoader,
  Component,
  EntitiesCollection,
  ViewBuilder,
} from 'mysh-pixi';

import { AssetKey } from '@shared/data';

export const ButtonView = (
  collection: EntitiesCollection,
  icon: string,
  components: Component[] = []
) => {
  const buttonComponent = new ButtonComponent(
    AssetKey.Button,
    AssetKey.ButtonHovered,
    AssetKey.ButtonPressed,
    AssetKey.ButtonDisabled
  );

  const iconTexture = AssetsLoader.Textures.get(icon);

  //prettier-ignore
  const view = new ViewBuilder(Sprite)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
      .withComponent(buttonComponent)
      .withComponent(new ButtonShiftedClick(0, 2))
      .withComponent(new CursorTypeComponent('pointer'))
      .withComponent(new ButtonHoldableComponent());

  /**
   * Add extra components.
   */
  components.forEach((component) => {
    view.withComponent(component);
  });

  //prettier-ignore
  view.withChildren()
    .withNode(Sprite)
      .withTexture(iconTexture)
      .withAnchor(0.5, 0.5)
      .withScale(0.7, 0.7)
      .withPositionY(-2)
  .endChildren();

  return view.build();
};
