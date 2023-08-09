import { AnimateProjectileSystem } from '@modules/projectile-module';
import { ChainBuilder } from 'mysh-pixi';
import { AnimateGunSystem, ShowCrossairSystem } from '../systems';

export const OnShootChain = () => {
  return new ChainBuilder()
    .withSystem(ShowCrossairSystem, { show: true })
    .withSystem(AnimateGunSystem)
    .withSystem(AnimateProjectileSystem)
    .build();
};
