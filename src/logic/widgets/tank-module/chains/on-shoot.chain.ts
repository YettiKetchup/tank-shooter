import { AnimateProjectileSystem } from '@modules/projectile-module';
import { ChainBuilder } from 'mysh-pixi';
import { ShowCrossairSystem } from '../systems';

export const OnShootChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(AnimateProjectileSystem)
    .withSystem(ShowCrossairSystem, {show: true})
  .build();
};
