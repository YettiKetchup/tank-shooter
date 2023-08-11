import { PlayerTankComponent } from '../components';
import { TankView } from './tank.view';

export const PlayerTankView = () =>
  TankView('player', new PlayerTankComponent());
