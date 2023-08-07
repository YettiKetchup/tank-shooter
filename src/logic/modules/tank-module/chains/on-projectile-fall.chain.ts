import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';

export const OnProjectileFallChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
  .build();
};
