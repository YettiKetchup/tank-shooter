import { ProjectileType } from '@shared/data';
import { getProjectileData } from '@shared/utils';

export class ProjectileComponent {
  public distanceDelta: number = 1;
  public damage: number = 0;
  public flyDistance: number = 0;
  public speed: number = 0;

  constructor(public type: ProjectileType) {
    const data = getProjectileData(type);
    this.damage = data.damage;
    this.flyDistance = data.flyDistance;
    this.speed = data.speed;
  }
}
