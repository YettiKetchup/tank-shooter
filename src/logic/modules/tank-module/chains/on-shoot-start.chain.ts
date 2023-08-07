import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { ShowPowerBarSystem } from '../systems';
import { DecreaseAmmoCount } from '../systems/decrease-ammo-count.system';

export const OnShootStartChain = (collection: EntitiesCollection) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(new ShowPowerBarSystem(true))
    .withSystem(new DecreaseAmmoCount())
  .build();
};
