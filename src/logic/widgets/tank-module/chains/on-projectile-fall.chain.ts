import { Container } from '@pixi/display';
import { ChainBuilder } from 'mysh-pixi';
import { CrossairComponent, EnemyTankComponent } from '../components';
import { DamageTankSystem } from '../systems';
import { DecalView, DetectIntersectionSystem } from '@shared/modules';
import { DestroyEntitySystem } from '@systems/destroy-entity.system';
import { AddDecalSystem } from '@shared/modules/decals-module/systems';
import { AssetKey } from '@shared/data';
import '@pixi/mixin-get-global-position';

import {
  ProjectileComponent,
  ProjectileExplode,
} from '@modules/projectile-module';

import {
  BlockAmmoButtons,
  ClearIndicatorSystem,
} from '@modules/shoot-ui-module/systems';

export const OnProjectileFallChain = (
  projectile: ProjectileComponent,
  container: Container
) => {
  const { x, y } = container.getGlobalPosition();

  //prettier-ignore
  return new ChainBuilder()
    .withSystem(DetectIntersectionSystem)
    .withSystem(ProjectileExplode)
    .withSystem(AddDecalSystem, {decal: DecalView(AssetKey.CracksDecal), x, y})

    .withSystem(DamageTankSystem, {damage: projectile.damage})
      .withIncludes(EnemyTankComponent)
    
    .withSystem(DestroyEntitySystem)
      .withIncludes(ProjectileComponent)

    .withSystem(DestroyEntitySystem)
      .withIncludes(CrossairComponent)

    .withSystem(ClearIndicatorSystem)
    .withSystem(BlockAmmoButtons, {block: false})
  .build();
};
