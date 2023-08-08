import { ProjectileType } from '../data/types';

export class ShootButtonComponent {
  constructor(
    public type: ProjectileType,
    public damage: number,
    public distance: number = 1
  ) {}
}
