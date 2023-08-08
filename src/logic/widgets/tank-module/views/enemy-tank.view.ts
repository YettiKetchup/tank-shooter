import { IntersectableComponent } from '@shared/modules';
import { EnemyTankComponent } from '../components';
import { TankView } from './tank.view';

export const EnemyTankView = () =>
  TankView('enemy', new EnemyTankComponent(), new IntersectableComponent());
