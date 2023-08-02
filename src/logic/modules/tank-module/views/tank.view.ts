import { ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';
import { TankColor } from '../data/types';

export const TankView = (color: TankColor) => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(`tank_${color}.png`)
    .withAnchor(0.5, 0.5)
      .withChildren()
        .withNode(Sprite)
          .withTexture(`gun_${color}.png`)
          .withAnchor(0.5, 0)
      .endChildren()
  .build();
};
