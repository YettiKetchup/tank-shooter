import { projectileConfig } from './projectile.config';
import { ProjectileData, ProjectileType } from './types';

export const getProjectileData = (type: ProjectileType): ProjectileData => {
  return projectileConfig.find(
    (config) => config.type === type
  ) as ProjectileData;
};
