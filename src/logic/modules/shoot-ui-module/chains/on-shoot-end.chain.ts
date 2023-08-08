import { ChainBuilder } from 'mysh-pixi';
import { BlockAmmoButtons, ShowPowerBarSystem } from '../systems';

export const OnShootEndChain = () => {
  return new ChainBuilder()
    .withSystem(BlockAmmoButtons)
    .withSystem(ShowPowerBarSystem, { show: false })
    .build();
};
