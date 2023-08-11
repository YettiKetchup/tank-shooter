import { DecalComponent } from '@components/decals';
import { Sprite } from '@pixi/sprite';
import { AssetKey, StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';

export const DecalView = (lifetime: number = 5000) => {
  const colelction = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(AssetKey.CracksDecal)
    .withAnchor(0.5, 0.5)
    .withAlpha(0.5)
    .asEntity(colelction)
      .withComponent(new DecalComponent(lifetime))
  .build();
};
