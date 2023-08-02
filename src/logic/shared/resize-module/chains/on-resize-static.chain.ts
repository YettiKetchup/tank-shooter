import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { AbsolutePositionSystem, AnchorSystem, PivotSystem } from '../systems';
import { PixiOrientation } from '../data/types';

export const OnResizeStaticChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return (orientation: PixiOrientation) => new ChainBuilder(collection)
    .withSystem(new AbsolutePositionSystem(orientation))
    .withSystem(new AnchorSystem(orientation))
    .withSystem(new PivotSystem(orientation))
  .build()
};
