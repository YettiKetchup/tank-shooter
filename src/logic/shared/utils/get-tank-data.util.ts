import { TankData, TankType, tanksConfig } from '@shared/data/tank';

export const getTankData = (type: TankType): TankData => {
  return tanksConfig.find((config) => config.type === type) as TankData;
};
