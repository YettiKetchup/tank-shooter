export type ProjectileType = 'small' | 'medium' | 'big';

export type ProjectileData = {
  type: ProjectileType;
  damage: number;
  flyTime: number;
  chargingSpeed: number;
  maxDistance: number;
};
