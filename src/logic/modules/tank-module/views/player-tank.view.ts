import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { PlayerTankComponent } from '../components/player-tank.component';
import { Sprite } from 'pixijs';
import { AssetKey } from '@shared/aseets/asset-key.enum';

export const PlayerTankView = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.TankRedBody)
    .withPosition(0, 320)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
      .withComponent(new PlayerTankComponent())
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.TankRedGun)
        .withAnchor(0.5, 0.8)
    .endChildren()
  .build();
};
