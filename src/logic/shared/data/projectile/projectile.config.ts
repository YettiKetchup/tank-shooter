import { ProjectileData } from './types';

export const projectileConfig: ProjectileData[] = [
  {
    type: 'small',
    damage: 15,
    count: 30,
    flyDistance: 800,
    speed: 700,
    chargingSpeed: 0.01,
  },
  {
    type: 'medium',
    damage: 20,
    count: 20,
    flyDistance: 800,
    speed: 800,
    chargingSpeed: 0.015,
  },
  {
    type: 'big',
    damage: 25,
    count: 10,
    flyDistance: 800,
    speed: 900,
    chargingSpeed: 0.02,
  },
];
