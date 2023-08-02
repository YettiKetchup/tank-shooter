import { ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const BarrelView = () => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture('barrel_red.png')
    .withAnchor(0.5, 0.5)
  .build()
};
