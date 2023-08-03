import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const OilView = (x: number, y: number) => {
  const texture = AssetsLoader.Textures.get('oil.png');

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withPosition(x, y)
    .withAnchor(0.5, 0.5)
  .build()
};