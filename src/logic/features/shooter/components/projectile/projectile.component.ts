import { Point } from '@pixi/core';
import { ProjectileData, ProjectileType } from '@shared/api/projectiles';

export class ProjectileComponent {
  public type: ProjectileType = 'small';
  public damage: number = 0;
  public flyTime: number = 0;
  public chargingSpeed: number = 0;
  public maxDistance: number = 0;

  public get destinationPoint(): Point {
    const point = new Point();
    point.x = this.delta.x * this.maxDistance;
    point.y = this.delta.y * this.maxDistance;

    return point;
  }

  constructor(data: ProjectileData, public delta: Point) {
    this.type = data.type;
    this.damage = data.damage;
    this.flyTime = data.flyTime;
    this.chargingSpeed = data.chargingSpeed;
    this.maxDistance = data.maxDistance;
  }
}
