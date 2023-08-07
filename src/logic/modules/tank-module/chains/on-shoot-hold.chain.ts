import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';

export const OnShootHoldChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
  .build();
};
