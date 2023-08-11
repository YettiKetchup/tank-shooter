import { Sprite } from '@pixi/sprite';
import { ProjectileType, StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { ProjectileComponent } from '../components';
import { IntersectableComponent } from '@features/intersection';

export const ProjectileView = (type: ProjectileType) => {
  const collection = EntityStorage.get(StorageKey.Game);
  const texture = `bullet_red_${type}.png`;
  const projectileComponent = new ProjectileComponent(type);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(projectileComponent, true)
      .withComponent(IntersectableComponent)
    .withTexture(texture)
    .withAnchor(0.5, 0.5)
  .build();
};
