import { ProjectileType } from '@shared/data';

export class ProjectileComponent {
  constructor(
    public damage: number,
    public distance: number,
    public type: ProjectileType
  ) {}
}
