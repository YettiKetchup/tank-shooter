import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { PlayerTankComponent } from '../../components';
import { Sprite } from 'pixijs';
import { AssetKey } from '@shared/data';

export const PlayerTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.TankRedBody)
    .withPosition(0, 320)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
    .withComponent(PlayerTankComponent)
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.TankRedGun)
        .withAnchor(0.5, 0.8)
    .endChildren()
  .build();
};
