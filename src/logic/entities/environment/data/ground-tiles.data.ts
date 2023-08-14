import { AssetKey } from '@shared/data';

export const groundGrid = [
  [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
  [11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10],
  [10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
  [11, 10, 11, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 10, 11, 10],
  [10, 11, 10, 15, 10, 11, 10, 11, 10, 11, 10, 11, 15, 11, 10, 11],
  [6, 6, 6, 20, 6, 6, 6, 6, 6, 6, 6, 6, 21, 6, 6, 6],
  [1, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1, 0],
  [0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 5, 1, 0, 1],
  [1, 0, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
];

export const groundMapConfig: Map<number, string> = new Map();

groundMapConfig.set(0, AssetKey.Grass);
groundMapConfig.set(1, AssetKey.GrassVariant);
groundMapConfig.set(2, AssetKey.GrassRight);
groundMapConfig.set(3, AssetKey.GrassLeft);
groundMapConfig.set(4, AssetKey.GrassRoad);
groundMapConfig.set(5, AssetKey.GrassRoadUp);
groundMapConfig.set(6, AssetKey.GrassSand);

groundMapConfig.set(10, AssetKey.Sand);
groundMapConfig.set(11, AssetKey.SandVariant);
groundMapConfig.set(12, AssetKey.SandLeft);
groundMapConfig.set(13, AssetKey.SandRight);
groundMapConfig.set(14, AssetKey.SandRoad);
groundMapConfig.set(15, AssetKey.SandRoadUp);

groundMapConfig.set(20, AssetKey.GrassSandRoad);
groundMapConfig.set(21, AssetKey.GrassSandRoadVariat);
