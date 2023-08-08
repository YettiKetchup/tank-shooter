import { AmmoConfig } from '../../../modules/shoot-ui-module/data/ammo.config';
import {
  AmmoData,
  ProjectileType,
} from '../../../modules/shoot-ui-module/data/types';

export const getAmmoData = (type: ProjectileType): AmmoData => {
  return AmmoConfig.find((config) => config.type === type) as AmmoData;
};
