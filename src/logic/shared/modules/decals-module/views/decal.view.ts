import { Sprite } from '@pixi/sprite';
import { StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { DecalComponent } from '../components';

export const DecalView = (texture: string, lifetime: number = 5000) => {
  const colelction = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(texture)
    .withAnchor(0.5, 0.5)
    .withAlpha(0.5)
    .asEntity(colelction)
      .withComponent(new DecalComponent(lifetime))
  .build();
};
