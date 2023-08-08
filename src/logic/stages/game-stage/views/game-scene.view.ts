import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnemyTankView, PlayerTankView } from '@widgets/tank-module';
import { GameStageEnvironmentView } from '@modules/environment-module';
import { SmartFitComponent } from '@shared/modules/resize-module';
import { StorageKey } from '@shared/data';

export const GameSceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
      .withNode(EnemyTankView())
      .withNode(PlayerTankView(collection))
    .endChildren()
  .build();
};
