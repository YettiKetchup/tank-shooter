import { StorageKey } from '@shared/data';
import { TankType } from '@shared/data/tank';
import { getTankData } from '@shared/utils';
import { TankComponent } from '@widgets/tank-module/components';
import { Component, EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container, Sprite } from 'pixijs';

export const TankView = (type: TankType, ...components: Component[]) => {
  const collection = EntityStorage.get(StorageKey.Game);
  const shootPointRef = new Container();
  const { color, health } = getTankData(type);
  const textureBody = `tank_${color}.png`;
  const textureGun = `gun_${color}.png`;
  const tankComponent = new TankComponent(health, shootPointRef);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(textureBody)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
    .withComponents([tankComponent, ...components])
    .withChildren()
      .withNode(Sprite)
        .withTexture(textureGun)
        .withAnchor(0.5, 0.8)
      .withNode(shootPointRef)
        .withPositionY(-40)
    .endChildren()
  .build();
};