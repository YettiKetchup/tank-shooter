import { Chain } from 'mysh-pixi';

export type PixiOrientation = 'landscape' | 'portrait';

export type ResizeChainCalback = (orientation: PixiOrientation) => Chain;
