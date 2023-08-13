import { DecalComponent } from '@features/vfx';
import { Sprite } from '@pixi/sprite';
import { AssetKey, StorageKey } from '@shared/data';
import { AssetsLoader, EntityStorage, ViewBuilder } from 'mysh-pixi';

export const CracksView = () => {
  const collection = EntityStorage.get(StorageKey.VFX);
  const texture = AssetsLoader.Textures.get(AssetKey.CracksDecal);

  return new ViewBuilder(Sprite)
    .asEntity(collection)
    .withComponent(new DecalComponent(), true)
    .withTexture(texture)
    .withAnchor(0.5, 0.5)
    .withScale(0.7, 0.7)
    .withAlpha(0.8)
    .build();
};
