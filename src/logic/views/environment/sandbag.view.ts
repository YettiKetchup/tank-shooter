import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const SandbagView = (x: number, y: number) => {
  const texture = AssetsLoader.Textures.get('sandbag.png');

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withPosition(x, y)
    .withAnchor(0.5, 0.5)
    .withAngle(45)
  .build()
};
