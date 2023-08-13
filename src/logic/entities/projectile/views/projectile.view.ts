import { Sprite } from '@pixi/sprite';
import { StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { IntersectableComponent } from '@features/intersection';
import { Point } from '@pixi/core';
import { ProjectileAPI, ProjectileType } from '@shared/api/projectiles';
import {
  FlyParabolicProjectileComponent,
  FlyForwardProjectileComponent,
  ProjectileComponent,
  TankProjectileComponent,
} from '@features/shooter';

export const ProjectileView = (type: ProjectileType, point: Point) => {
  const collection = EntityStorage.get(StorageKey.Game);
  const texture = `bullet_red_${type}.png`;
  const data = ProjectileAPI.get(type);
  const projectileComponent = new ProjectileComponent(data, point);

  return new ViewBuilder(Sprite)
    .asEntity(collection)
    .withComponent(TankProjectileComponent)
    .withComponent(projectileComponent, true)
    .withComponent(FlyForwardProjectileComponent, true)
    .withComponent(FlyParabolicProjectileComponent, true)
    .withComponent(IntersectableComponent)
    .withTexture(texture)
    .withAnchor(0.5, 0.5)
    .build();
};
