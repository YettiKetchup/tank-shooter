import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { BlockAmmoButtons, ShowPowerBarSystem } from '../systems';
import { DecreaseAmmoCount } from '../systems/decrease-ammo-count.system';

export const OnShootStartChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(ShowPowerBarSystem, {show: true})
    .withSystem(DecreaseAmmoCount)
    .withSystem(BlockAmmoButtons)
  .build();
};
