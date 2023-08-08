import { ChainBuilder } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';
import { ARPositionSystem, ARScaleSystem, SmartFitSystem } from '../systems';

export const OnResizeDynamicChain = (orientation: PixiOrientation) => {
  return new ChainBuilder()
    .withSystem(ARPositionSystem, { orientation })
    .withSystem(SmartFitSystem)
    .withSystem(ARScaleSystem, { orientation })
    .build();
};
