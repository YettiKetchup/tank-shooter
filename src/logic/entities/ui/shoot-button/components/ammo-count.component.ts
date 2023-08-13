import { ProjectileType } from '@shared/api/projectiles';

export class AmmoCountComponent {
  constructor(public type: ProjectileType, public value: number) {}
}
