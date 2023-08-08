import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { ChangeIndicatorColor, FillIndicatorSystem } from '../systems';

export const OnShootHoldChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(FillIndicatorSystem)
    .withSystem(ChangeIndicatorColor)
  .build();
};
