import { AnimateProjectileSystem } from '@modules/projectile-module';
import { ChainBuilder } from 'mysh-pixi';

export const OnShootChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(AnimateProjectileSystem)
  .build();
};
