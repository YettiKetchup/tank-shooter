import { TankComponent } from '@widgets/tank-module';
import { Entity } from 'mysh-pixi';

export const tankDefeatedPipe = (entity: Entity) => {
  const has = entity.has([TankComponent]);
  if (!has) return false;

  const tank = entity.get(TankComponent);
  if (tank.health <= 0) return true;

  return false;
};
