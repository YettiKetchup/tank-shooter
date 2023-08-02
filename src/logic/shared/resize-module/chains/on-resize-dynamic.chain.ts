import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';
import { RelativePositionSystem, RelativeScaleSystem } from '../systems';

export const OnResizeDynamicChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return (orientation: PixiOrientation) => new ChainBuilder(collection)
    .withSystem(new RelativePositionSystem(orientation))
    .withSystem(new RelativeScaleSystem(orientation))
  .build()
};
