import { ChainBuilder } from 'mysh-pixi';
import { InstantiateCrossairSystem } from '../systems';

export const StartShootChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(InstantiateCrossairSystem)
  .build()
};
