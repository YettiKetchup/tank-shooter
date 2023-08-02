import { ViewBuilder } from 'mysh-pixi';
import { TankView } from './tank.view';

export const EnemyTankView = () => {
  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
  .inPosition(0, -300)
  .build();
};
