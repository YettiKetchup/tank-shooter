import { ShootButtonComponent } from '@modules/shoot-ui-module/components';
import { ChainBuilder } from 'mysh-pixi';
import { InstantiateProjectileSystem } from '../systems';

export const OnShootChain = (shootType: ShootButtonComponent) => {
  //prettier-ignore
  return new ChainBuilder()
    // .withSystem(InstantiateProjectileSystem, {type: shootType.type, distance: shootType.distance})
  .build();
};
