import { AmmoConfig } from '../data/ammo.config';
import { AmmoData, ProjectileType } from '../data/types';

export const getAmmoData = (type: ProjectileType): AmmoData => {
  return AmmoConfig.find((config) => config.type === type) as AmmoData;
};
