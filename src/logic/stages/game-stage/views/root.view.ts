import { EnemyTankView, PlayerTankView } from '@modules/tank-module/';
import { EntityStorage } from 'mysh';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const RootView = () => {
  const gameCollection = EntityStorage.get('game');
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(Container)
    .withChildren()
      .withNode(PlayerTankView(gameCollection))
      .withNode(EnemyTankView())
    .endChildren()
  .build()
};
