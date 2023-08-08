export type TankType = 'player' | 'enemy';
export type TankColor = 'red' | 'blue';

export type TankData = {
  type: TankType;
  health: number;
  color: TankColor;
};
