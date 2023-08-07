import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';

export const OnShootEndChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
  .build();
};
