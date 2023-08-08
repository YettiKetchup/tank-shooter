import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const ButtonIconView = (icon: string) => {
  const texture = AssetsLoader.Textures.get(icon);

  //prettier-ignore
  return new ViewBuilder(Sprite)
  .withTexture(texture)
    .withAnchor(0.5, 0.5)
    .withScale(0.7, 0.7)
    .withPositionY(-2)
  .build();
};
