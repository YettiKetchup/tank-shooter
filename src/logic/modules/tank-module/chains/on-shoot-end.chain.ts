import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { BlockAmmoButtons } from '../systems';

export const OnShootEndChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(BlockAmmoButtons)
  .build();
};
