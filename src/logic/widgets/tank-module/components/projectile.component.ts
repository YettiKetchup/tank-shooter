import { ProjectileType } from '@modules/shoot-ui-module/data/types';

export class ProjectileComponent {
  constructor(
    public damage: number,
    public distance: number,
    public type: ProjectileType
  ) {}
}
