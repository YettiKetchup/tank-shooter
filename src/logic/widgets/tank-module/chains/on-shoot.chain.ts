import { ShootButtonComponent } from '@modules/shoot-ui-module/components';
import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { InstantiateProjectileSystem } from '../systems';

export const OnShootChain = (
  collection: EntitiesCollection,
  shootType: ShootButtonComponent
) => {
  //prettier-ignore
  return new ChainBuilder(collection)
    .withSystem(InstantiateProjectileSystem, {type: shootType.type, distance: shootType.distance})
  .build();
};
