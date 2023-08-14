import { TankAPI } from '@shared/api/tanks';
import { TankView } from './tank.view';
import { EnemyTankComponent } from '@widgets/tank';

export const EnemyTankView = () => {
  const data = TankAPI.get('enemy');
  const view = TankView(data, new EnemyTankComponent());

  view.y = -320;
  view.angle = 180;

  return view;
};
