export type ProjectileType = 'small' | 'medium' | 'big';

export type AmmoData = {
  type: ProjectileType;
  count: number;
  damage: number;
};
