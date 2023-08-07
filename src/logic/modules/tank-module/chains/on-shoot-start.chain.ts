import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { BlockAmmoButtons, ShowPowerBarSystem } from '../systems';
import { DecreaseAmmoCount } from '../systems/decrease-ammo-count.system';

export const OnShootStartChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(new ShowPowerBarSystem(true))
    .withSystem(new DecreaseAmmoCount())
    .withSystem(new BlockAmmoButtons())
  .build();
};
