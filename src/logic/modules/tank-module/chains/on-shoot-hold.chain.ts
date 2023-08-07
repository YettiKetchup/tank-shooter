import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { FillIndicatorSystem } from '../systems/fill-indicator.system';

export const OnShootHoldChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(new FillIndicatorSystem())
  .build();
};
