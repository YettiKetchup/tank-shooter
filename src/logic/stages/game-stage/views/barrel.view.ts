import { AssetBunble, AssetName } from '@shared/aseets';
import { AssetsLoader, ViewBuilder } from 'mysh-pixi';
import { Sprite } from 'pixijs';

export const BarrelView = () => {
  const barrelTexture = AssetsLoader.getTexture(
    AssetBunble.GameScreen,
    AssetName.Barrel
  );

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withTexture(barrelTexture)
    .withAnchor(0.5, 0.5)
  .build()
};
