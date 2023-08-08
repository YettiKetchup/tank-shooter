import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { DecreaseAmmoCount, ShowPowerBarSystem } from '../systems';

export const OnShootStartChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(ShowPowerBarSystem, {show: true})
    .withSystem(DecreaseAmmoCount)
  .build();
};
