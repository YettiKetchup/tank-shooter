import { ProjectileType } from '@shared/api/projectiles';

export class ShootButtonComponent {
  constructor(public type: ProjectileType, public chargingSpeed: number) {}
}
