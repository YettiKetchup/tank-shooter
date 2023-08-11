import {
  ParticleCallback,
  ProjectileType,
  getProjectileData,
} from '@shared/data';

export class ProjectileComponent {
  public distanceDelta: number = 1;
  public damage: number = 0;
  public flyDistance: number = 0;
  public speed: number = 0;
  public particles: ParticleCallback | null = null;

  constructor(public type: ProjectileType) {
    const data = getProjectileData(type);
    this.damage = data.damage;
    this.flyDistance = data.flyDistance;
    this.speed = data.speed;
    this.particles = data.particles;
  }
}
