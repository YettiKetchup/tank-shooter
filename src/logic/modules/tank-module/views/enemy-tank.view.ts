import { ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';
import { AssetKey } from '@shared/aseets/asset-key.enum';

export const EnemyTankView = () => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.TankBlueBody)
    .withPosition(0, -320)
    .withAnchor(0.5, 0.5)
    .withAngle(180)
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.TankBlueGun)
        .withAnchor(0.5, 0.8)
    .endChildren()
  .build();
};
