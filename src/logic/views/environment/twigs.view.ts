import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const TwigsView = (x: number, y: number, color: string = 'green') => {
  const texture = AssetsLoader.Textures.get(`twigs_${color}.png`);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withPosition(x, y)
  .build();
};
