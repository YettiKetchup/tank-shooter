import { ProjectileType } from '@shared/data';

export class ShootButtonComponent {
  constructor(
    public type: ProjectileType,
    public damage: number,
    public distance: number = 1
  ) {}
}
