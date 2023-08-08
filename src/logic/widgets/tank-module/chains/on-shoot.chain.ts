import { ChainBuilder } from 'mysh-pixi';
import { AnimateProjectileSystem } from '../systems';

export const OnShootChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(AnimateProjectileSystem)
  .build();
};
