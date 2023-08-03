import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';
import { ARPositionSystem, ARScaleSystem, SmartFitSystem } from '../systems';

export const OnResizeDynamicChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return (orientation: PixiOrientation) => new ChainBuilder(collection)
    .withSystem(new ARPositionSystem(orientation))
    .withSystem(new SmartFitSystem(orientation))
    .withSystem(new ARScaleSystem(orientation))
  .build()
};
