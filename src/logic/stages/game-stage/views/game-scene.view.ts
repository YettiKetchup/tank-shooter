import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { Container } from '@pixi/display';
import { EnemyTankView, PlayerTankView } from '@widgets/tank-module';
import { GameStageEnvironmentView } from '@modules/environment-module';
import { SmartFitComponent } from '@shared/modules/resize-module';
import { StorageKey } from '@shared/data';
import { ShootPowerIndicator } from '@modules/shoot-ui-module';
import { EnemyHealthbarView } from '@modules/healtbar-module';

export const GameSceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);
  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
      .withNode(EnemyTankView()) 
        .withPosition(0, -320)
        .withAngle(180)
      .withNode(EnemyHealthbarView())
        .withPositionY(-400)
      .withNode(ShootPowerIndicator())
      .withNode(PlayerTankView())
        .withPosition(0, 320)
    .endChildren()
  .build();
};
