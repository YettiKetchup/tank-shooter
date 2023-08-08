export type ProjectileType = 'small' | 'medium' | 'big';

export type ProjectileData = {
  type: ProjectileType;
  count: number;
  damage: number;
  flyDistance: number;
  speed: number;
  chargingSpeed: number;
};
