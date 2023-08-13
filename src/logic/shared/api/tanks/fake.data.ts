import { TankData } from './data/types';

export const fakeData: TankData[] = [
  {
    type: 'player',
    health: 100,
    color: 'red',
    projectiles: [
      {
        type: 'small',
        count: 15,
      },
      {
        type: 'medium',
        count: 10,
      },
      {
        type: 'big',
        count: 5,
      },
    ],
  },
  {
    type: 'enemy',
    health: 100,
    color: 'blue',
    projectiles: [
      {
        type: 'small',
        count: 15,
      },
      {
        type: 'medium',
        count: 10,
      },
      {
        type: 'big',
        count: 5,
      },
    ],
  },
];
