import { Sprite } from 'pixijs';
import { ProjectileType, StorageKey } from '@shared/data';
import { IntersectableComponent } from '@shared/modules';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { ProjectileComponent } from '../components';

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
    .withAnchor(0.5, 1)
  .build();
};
