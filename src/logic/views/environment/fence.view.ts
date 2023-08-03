import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const FenceView = (x: number, y: number) => {
  const texture = AssetsLoader.Textures.get('fence.png');

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withPosition(x, y)
    .withAnchor(0.5, 0.5)
  .build()
};