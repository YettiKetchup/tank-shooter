import { ViewBuilder } from 'mysh-pixi';
import { TankView } from './tank.view';

export const EnemyTankView = () => {
  //prettier-ignore
  return new ViewBuilder(TankView('blue'))
    .withPosition(0, -300)
    .withAngle(180)
  .build();
};
