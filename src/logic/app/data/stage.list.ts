import { GameStage } from '@stages/game-stage';
import { IStage } from 'mysh-pixi';
import { Application } from '@pixi/app';

export const stageList = (app: Application): IStage[] => {
  const stages: IStage[] = [new GameStage(app)];

  return stages;
};
