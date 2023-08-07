import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';
import { ARPositionSystem, ARScaleSystem, SmartFitSystem } from '../systems';

export const OnResizeDynamicChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return (orientation: PixiOrientation) => new ChainBuilder(collection)
    .withSystem(ARPositionSystem, {orientation})
    .withSystem(SmartFitSystem)
    .withSystem(ARScaleSystem, {orientation})
  .build()
};
