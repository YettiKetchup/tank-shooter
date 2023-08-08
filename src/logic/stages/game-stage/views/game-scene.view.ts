import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Container } from 'pixijs';
import { EnemyTankComponent, PlayerTankComponent } from '@widgets/tank-module';
import { GameStageEnvironmentView } from '@modules/environment-module';
import { SmartFitComponent } from '@shared/modules/resize-module';
import { StorageKey } from '@shared/data';
import { TankView } from '@widgets/tank-module/views/tanks/tank.view';
import { IntersectableComponent } from '@shared/modules';

export const GameSceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
      .withNode(TankView('enemy', new EnemyTankComponent(), new IntersectableComponent())) 
        .withPosition(0, -320)
        .withAngle(180)
      .withNode(TankView('player', new PlayerTankComponent(), new IntersectableComponent()))
        .withPosition(0, 320)
    .endChildren()
  .build();
};
