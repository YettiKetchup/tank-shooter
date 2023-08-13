import { TankView } from './tank.view';
import { PlayerTankComponent } from '@widgets/tank';
import { TankAPI } from '@shared/api/tanks';

export const PlayerTankView = () => {
  const data = TankAPI.get('player');
  const view = TankView(data, new PlayerTankComponent());

  view.y = 320;

  return view;
};
