import { ChainBuilder } from 'mysh-pixi';
import { DecreaseAmmoCount, ShowPowerBarSystem } from '../systems';

export const OnShootStartChain = () => {
  return new ChainBuilder()
    .withSystem(ShowPowerBarSystem, { show: true })
    .withSystem(DecreaseAmmoCount)
    .build();
};
