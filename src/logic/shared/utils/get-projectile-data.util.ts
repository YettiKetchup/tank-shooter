import { ProjectileData, ProjectileType, projectileConfig } from '@shared/data';

export const getProjectileData = (type: ProjectileType): ProjectileData => {
  return projectileConfig.find(
    (config) => config.type === type
  ) as ProjectileData;
};
