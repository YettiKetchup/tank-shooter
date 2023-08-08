import { ProjectileData } from './types';

export const projectileConfig: ProjectileData[] = [
  {
    type: 'small',
    damage: 15,
    count: 30,
    flyDistance: 800,
    speed: 700,
  },
  {
    type: 'medium',
    damage: 20,
    count: 20,
    flyDistance: 800,
    speed: 800,
  },
  {
    type: 'big',
    damage: 25,
    count: 10,
    flyDistance: 800,
    speed: 900,
  },
];
