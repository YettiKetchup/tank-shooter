import { ProjectileData } from '../../api/projectiles/data/types';

export const fakeData: ProjectileData[] = [
  {
    type: 'small',
    damage: 5,
    flyTime: 0.8,
    chargingSpeed: 0.005,
    maxDistance: 450,
  },
  {
    type: 'medium',
    damage: 10,
    flyTime: 0.7,
    chargingSpeed: 0.01,
    maxDistance: 525,
  },
  {
    type: 'big',
    damage: 15,
    flyTime: 0.6,
    chargingSpeed: 0.015,
    maxDistance: 600,
  },
];
