import { ProjectileComponent, ProjectileFallComponent } from '../components';
import { Sprite } from '@pixi/sprite';
import { AssetKey, StorageKey } from '@shared/data';
import { ParticleContainerView } from '@shared/modules/particle-module';
import {
  Entity,
  Filtered,
  System,
  Includes,
  AssetsLoader,
  EntityStorage,
} from 'mysh-pixi';

@Includes(Sprite, ProjectileComponent, ProjectileFallComponent)
export class ProjectileExplode extends System {
  protected onExecute(entities: Filtered<Entity>): void {
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
