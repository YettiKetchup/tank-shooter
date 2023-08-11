import { Sprite } from '@pixi/sprite';
import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { AssetKey, StorageKey } from '@shared/data';
import { ParticleContainerView } from '@features/particles';
import {
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  AssetsLoader,
  EntityStorage,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(Sprite, ProjectileComponent)
export class ProjectileExplodeSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const projectile = entity.get(ProjectileComponent);

      if (projectile.particles) {
        const config = projectile.particles(
          AssetsLoader.Textures.get(AssetKey.ExplosionCloud)
        );

        const container = ParticleContainerView(
          EntityStorage.get(StorageKey.Particles),
          config
        );

        sprite.parent.addChild(container);
        container.x = sprite.x;
        container.y = sprite.y;
      }
    });
  }
}
