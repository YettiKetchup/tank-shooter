import { AssetBunble, AssetName } from './data/bundle.enum';

export const manifest = {
  bundles: [
    {
      name: AssetBunble.GameScreen,
      assets: [
        {
          name: AssetName.Barrel,
          srcs: '/assets/sprites/barrel_red.png',
        },
      ],
    },
  ],
};
