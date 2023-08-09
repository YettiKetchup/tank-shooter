import { smallExplosion } from './particles/small-explosion';
import { ProjectileData } from './types';

export const projectileConfig: ProjectileData[] = [
  {
    type: 'small',
    damage: 15,
    count: 30,
    flyDistance: 800,
    speed: 700,
    chargingSpeed: 0.005,
    particles: smallExplosion,
  },
  {
    type: 'medium',
    damage: 20,
    count: 20,
    flyDistance: 900,
    speed: 800,
    chargingSpeed: 0.01,
    particles: smallExplosion,
  },
  {
    type: 'big',
    damage: 25,
    count: 10,
    flyDistance: 1000,
    speed: 900,
    chargingSpeed: 0.015,
    particles: smallExplosion,
  },
];
