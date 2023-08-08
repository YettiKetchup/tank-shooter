import { ChainBuilder } from 'mysh-pixi';
import { ChangeIndicatorColor, FillIndicatorSystem } from '../systems';
import { ShootButtonComponent } from '../components';

export const OnShootHoldChain = (shootButton: ShootButtonComponent) => {
  return new ChainBuilder()
    .withSystem(FillIndicatorSystem, { fillSpeed: shootButton.chargingSpeed })
    .withSystem(ChangeIndicatorColor)
    .build();
};
