import { ViewBuilder, EntitiesCollection } from 'mysh-pixi';
import { PlayerTankComponent } from '../../components';
import { Container, Sprite } from 'pixijs';
import { AssetKey } from '@shared/data';

export const PlayerTankView = (collection: EntitiesCollection) => {
  const shootPointRef = new Container();
  const playerTankComponent = new PlayerTankComponent(shootPointRef);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.TankRedBody)
    .withPosition(0, 320)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
    .withComponent(playerTankComponent)
    .withChildren()
      .withNode(Sprite)
        .withTexture(AssetKey.TankRedGun)
        .withAnchor(0.5, 0.8)
      .withNode(shootPointRef)
        .withPositionY(-40)
    .endChildren()
  .build();
};
