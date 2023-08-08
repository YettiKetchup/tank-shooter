import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { InstantiateCrossairSystem } from '../systems';

export const StartShootChain = (colelction: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(colelction)
    .withSystem(InstantiateCrossairSystem)
  .build()
};
