import { ProjectileType } from '@shared/api/projectiles';

export type TankType = 'player' | 'enemy';

export type TankColor = 'red' | 'blue';

export type TankProjectileData = {
  type: ProjectileType;
  count: number;
};

export type TankData = {
  type: TankType;
  color: TankColor;
  health: number;
  projectiles: TankProjectileData[];
};
