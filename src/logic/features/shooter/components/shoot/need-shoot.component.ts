import { Container } from '@pixi/display';
import { ProjectileType } from '@shared/api/projectiles';

export class NeedShootComponent {
  constructor(public type: ProjectileType, public parent: Container) {}
}
