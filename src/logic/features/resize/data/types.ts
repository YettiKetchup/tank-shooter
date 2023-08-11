export type DesignResolutionType = {
  width: number;
  height: number;
};

export type ResizeModuleConfigType = {
  node: HTMLElement | null;
  currentWidth: number;
  currentHeight: number;
  aspectRatio: number;
  landscape: DesignResolutionType;
  portrait: DesignResolutionType;
};

export type PixiOrientation = 'landscape' | 'portrait';

export type ARComponentData = {
  xBellowAR: number;
  yBellowAR: number;
  xAboveAR: number;
  yAboveAR: number;
  aspectRatio?: number;
};
