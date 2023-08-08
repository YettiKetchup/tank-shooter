import { ChainBuilder } from 'mysh-pixi';
import { TankComponent } from '../components';
import { ChangeHealthSystem } from '@modules/healtbar-module';

export const OnTankDamaged = (tank: TankComponent) => {
  return new ChainBuilder()
    .withSystem(ChangeHealthSystem, { health: tank.health })
    .build();
};
