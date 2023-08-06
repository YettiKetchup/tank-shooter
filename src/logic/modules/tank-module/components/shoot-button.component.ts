import { ProjectileType, TankColor } from '../data/types';

export class ShootButtonComponent {
  constructor(public projectile: ProjectileType, color: TankColor = 'red') {}
}
