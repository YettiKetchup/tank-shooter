import { ProjectileType } from '@shared/data';

export class ShootButtonComponent {
  constructor(public type: ProjectileType, public chargingSpeed: number) {}
}
