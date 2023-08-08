import { Chain } from 'mysh-pixi';

export type DesignResolutionType = {
  width: number;
  height: number;
};

export type ResizeModuleConfigType = {
  NODE: HTMLElement | null;
  CURRENT_WIDTH: number;
  CURRENT_HEIGHT: number;
  ASPECT_RATIO: number;
  LANDSCAPE: DesignResolutionType;
  PORTRAIT: DesignResolutionType;
};

export type PixiOrientation = 'landscape' | 'portrait';

export type ResizeChainCalback = (orientation: PixiOrientation) => Chain;

export type ARComponentData = {
  xBellowAR: number;
  yBellowAR: number;
  xAboveAR: number;
  yAboveAR: number;
  aspectRatio?: number;
};
