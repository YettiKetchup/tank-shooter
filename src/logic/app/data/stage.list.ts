import { GameStage } from '@stages/game-stage';
import { IStage } from 'mysh';
import { Application } from 'pixijs';

export const stageList = (app: Application): IStage[] => {
  const stages: IStage[] = [new GameStage(app)];

  return stages;
};
