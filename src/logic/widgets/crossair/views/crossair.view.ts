import { AssetKey, StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Sprite } from '@pixi/sprite';
import { CrossairComponent } from '../components';

export const CrossairView = () => {
  const collection = EntityStorage.get(StorageKey.Game);

  return new ViewBuilder(Sprite)
    .asEntity(collection)
    .withComponent(new CrossairComponent())
    .withTexture(AssetKey.Crossair)
    .withAnchor(0.5, 0.5)
    .build();
};
