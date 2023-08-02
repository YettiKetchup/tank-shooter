import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EntityStorage } from 'mysh';
import { EnemyTankView, PlayerTankView } from '@modules/tank-module';

export const GameSceneView = () => {
  const gameCollection = EntityStorage.get('game');

  //prettier-ignore
  return new ViewBuilder(Container)
    .withChildren()
      .withNode(PlayerTankView(gameCollection))
        .withNode(EnemyTankView())
      .endChildren()
  .build();
};