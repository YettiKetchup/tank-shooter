import { HealthComponent } from '@features/damage';
import { IntersectableComponent } from '@features/intersection';
import { ProjectileSpawnPoint, ShootPowerComponent } from '@features/shooter';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { TankData } from '@shared/api/tanks';
import { StorageKey, ViewName } from '@shared/data';
import { TankComponent } from '@widgets/tank';
import { Component, EntityStorage, ViewBuilder } from 'mysh-pixi';

export const TankView = (tank: TankData, tag: Component) => {
  const collection = EntityStorage.get(StorageKey.Game);
  const textureBody = `tank_${tank.color}.png`;
  const textureGun = `gun_${tank.color}.png`;
  const shootPointRef = new Container();

  return new ViewBuilder(Sprite)
    .asEntity(collection)
    .withComponent(tag)
    .withComponent(new TankComponent())
    .withComponent(new HealthComponent(tank.health))
    .withComponent(new ProjectileSpawnPoint(shootPointRef))
    .withComponent(new ShootPowerComponent())
    .withComponent(new IntersectableComponent())

    .withTexture(textureBody)
    .withAnchor(0.5, 0.5)
    .withChildren()

    .withNode(Sprite, ViewName.TankGun)
    .withTexture(textureGun)
    .withAnchor(0.5, 0.8)

    .withNode(shootPointRef)
    .withPositionY(-45)

    .endChildren()

    .build();
};
