import { EnemyHealthbarComponent } from '../components';
import { HealthbarView } from './healtbar.view';

export const EnemyHealthbarView = () =>
  HealthbarView(new EnemyHealthbarComponent());
