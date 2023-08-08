import { ChainBuilder } from 'mysh-pixi';
import { DecreaseAmmoCount, ShowPowerBarSystem } from '../systems';

export const OnShootStartChain = () => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(ShowPowerBarSystem, {show: true})
    .withSystem(DecreaseAmmoCount)
  .build();
};
