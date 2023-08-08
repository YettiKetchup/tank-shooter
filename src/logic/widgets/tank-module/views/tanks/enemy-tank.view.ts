import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';
import { AssetKey } from '@shared/data';
import { IntersectableComponent } from '@shared/modules';
import { EnemyTankComponent } from '@widgets/tank-module/components/enemy-tank.component';

export const EnemyTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(IntersectableComponent)
      .withComponent(new EnemyTankComponent(100))
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
