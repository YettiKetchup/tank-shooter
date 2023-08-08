import { AssetKey, StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';
import { CrossairComponent } from '../components';

export const CrossairView = (maxDistance: number) => {
  const collection = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .asEntity(collection)
      .withComponent(new CrossairComponent(maxDistance))
    .withTexture(AssetKey.Crossair)
    .withAnchor(0.5, 0.5)
  .build();
};
