import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnemyTankView, PlayerTankView } from '@modules/tank-module';
import { GameStageEnvironmentView } from '@modules/environment-module';
import { SmartFitComponent } from '@shared/resize-module';

export const GameSceneView = () => {
  const gameCollection = EntityStorage.get('game');
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(gameCollection)
      .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
      .withNode(PlayerTankView(gameCollection))
      .withNode(EnemyTankView())
    .endChildren()
  .build();
};
