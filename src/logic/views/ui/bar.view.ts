import { AssetKey } from '@shared/data';
import { ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const BarView = () => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.BarBackground)
    .withAnchor(0.5, 0.5)
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.BarValue)
        .withScale(0, 1)
        .withAnchor(1, 0.5)
        .withPositionX(48)
    .endChildren()
  .build()
};
