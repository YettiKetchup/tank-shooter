import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const TreeView = (
  x: number,
  y: number,
  color: string = 'green',
  size: string = 'large'
) => {
  const texture = AssetsLoader.Textures.get(`tree_${color}_${size}.png`);
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withPosition(x, y)
    .withTexture(texture)
    .withAnchor(0.5, 0.5)
  .build();
};
