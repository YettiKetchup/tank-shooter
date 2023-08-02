import { Chain } from 'mysh-pixi';

export type PixiOrientation = 'landscape' | 'portrait';

export type ResizeChainCalback = (orientation: PixiOrientation) => Chain;

export type ARComponentData = {
  xBellowAR: number;
  yBellowAR: number;
  xAboveAR: number;
  yAboveAR: number;
  aspectRatio?: number;
};
