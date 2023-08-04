import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnemyTankView, PlayerTankView } from '@modules/tank-module';
import { GameStageEnvironmentView } from '@modules/environment-module';
import { SmartFitComponent } from '@shared/resize-module';
import { StorageKey } from '@shared/data';

export const GameSceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
      .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
      .withNode(PlayerTankView(collection))
      .withNode(EnemyTankView())
    .endChildren()
  .build();
};
