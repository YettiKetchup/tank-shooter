import { ChainBuilder } from 'mysh-pixi';
import { AbsolutePositionSystem, AnchorSystem, PivotSystem } from '../systems';
import { PixiOrientation } from '../data/types';

export const OnResizeStaticChain = (orientation: PixiOrientation) => {
  return new ChainBuilder()
    .withSystem(AbsolutePositionSystem, { orientation })
    .withSystem(AnchorSystem, { orientation })
    .withSystem(PivotSystem, { orientation })
    .build();
};
