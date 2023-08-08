import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { BlockAmmoButtons, ShowPowerBarSystem } from '../systems';

export const OnShootEndChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(BlockAmmoButtons)
    .withSystem(ShowPowerBarSystem, {show: false})
  .build();
};
