import { ChainBuilder } from 'mysh-pixi';
import { CrossairComponent, EnemyTankComponent } from '../components';
import { DamageTankSystem } from '../systems';
import { DetectIntersectionSystem } from '@shared/modules';
import {
  ProjectileComponent,
  ProjectileExplode,
} from '@modules/projectile-module';
import { DestroyEntitySystem } from '@systems/destroy-entity.system';
import {
  BlockAmmoButtons,
  ClearIndicatorSystem,
} from '@modules/shoot-ui-module/systems';

export const OnProjectileFallChain = (projectile: ProjectileComponent) => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(DetectIntersectionSystem)
    .withSystem(ProjectileExplode)

    .withSystem(DamageTankSystem, {damage: projectile.damage})
      .withIncludes(EnemyTankComponent)
    
    .withSystem(DestroyEntitySystem)
      .withIncludes(ProjectileComponent)

    .withSystem(DestroyEntitySystem)
      .withIncludes(CrossairComponent)

    .withSystem(ClearIndicatorSystem)

    .withSystem(BlockAmmoButtons, {block: false})
      .withDelay(1000)
  .build();
};

/**
 * Партиклы взрыва
 */
