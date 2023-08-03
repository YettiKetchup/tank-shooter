import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const BarricadeView = (x: number, y: number, type: number = 1) => {
  const texture = AssetsLoader.Textures.get(`barricade_${type}.png`);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withPosition(x, y)
    .withAnchor(0.5, 0.5)
  .build()
};
