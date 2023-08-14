import { GameStageEnvironmentView } from '@entities/environment';
import { EnemyTankView, PlayerTankView } from '@widgets/tank/views';
import { ShootPowerIndicator } from '@widgets/power-bar';
import { SmartFitComponent } from '@features/resize';
import { Container } from '@pixi/display';
import { StorageKey, ViewName } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { HealthbarView } from '@widgets/healthbar';

export const SceneView = () => {
  const collection = EntityStorage.get(StorageKey.Game);
  const enemyTankRef = EnemyTankView();
  const playerTankRef = PlayerTankView();

  return new ViewBuilder(Container, 'scene')
    .asEntity(collection)
    .withComponent(SmartFitComponent)

    .withChildren()

    .withNode(GameStageEnvironmentView())
    .withNode(enemyTankRef)
    .withNode(HealthbarView(enemyTankRef))
    .withPositionY(-400)

    .withNode(playerTankRef)
    .withNode(ShootPowerIndicator())
    .withNode(Container, ViewName.Projectiles)

    .endChildren()
    .build();
};
