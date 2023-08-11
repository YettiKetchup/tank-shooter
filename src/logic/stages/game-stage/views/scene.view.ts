import { SmartFitComponent } from '@features/resize';
import { Container } from '@pixi/display';
import { StorageKey } from '@shared/data';
import { ShootPowerIndicator } from '@systems/power-bar';
import { GameStageEnvironmentView } from '@views/environment';
import { EnemyTankView, PlayerTankView } from '@views/tank';
import { EnemyHealthbarView } from '@views/ui';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';

export const SceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(Container, 'scene')
    .asEntity(collection)
    .withComponent(SmartFitComponent)
    .withChildren()
      .withNode(GameStageEnvironmentView())
        .endChildren()
      .withNode(EnemyTankView()) 
        .withPosition(0, -320)
        .withAngle(180)
      .withNode(EnemyHealthbarView())
        .withPositionY(-400)
      .withNode(ShootPowerIndicator())
      .withNode(PlayerTankView())
        .withPosition(0, 320)
    .endChildren()
    .build()
};
