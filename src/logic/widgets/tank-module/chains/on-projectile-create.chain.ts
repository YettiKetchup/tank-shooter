import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { AnimateProjectileSystem } from '../systems';

export const OnProjectileCreate = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(AnimateProjectileSystem)
  .build();
};
