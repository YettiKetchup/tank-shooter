import { ProjectileType } from '@modules/shoot-ui-module/data/types';
import { StorageKey } from '@shared/data';
import { ProjectileComponent } from '@widgets/tank-module/components';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const ProjectileView = (
  type: ProjectileType,
  damage: number,
  distance: number
) => {
  const collection = EntityStorage.get(StorageKey.Game);
  const texture = `bullet_red_${type}.png`;
  const projectileComponent = new ProjectileComponent(damage, distance, type);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(projectileComponent, true)
    .withTexture(texture)
    .withAnchor(0.5, 1)
  .build();
};
