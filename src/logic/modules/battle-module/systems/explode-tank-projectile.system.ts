import { Container } from '@pixi/display';
import { CreateParticleEvent } from '@features/vfx';
import { DecalKey, VFXType, ViewName } from '@shared/data';
import { PixiRenderer } from '@app/pixi.renderer';

import {
  ProjectileComponent,
  ProjectileFallComponent,
  TankProjectileComponent,
} from '@features/shooter';

import {
  Entity,
  Filtered,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  ProjectileFallComponent,
  includesPipe(ProjectileComponent, TankProjectileComponent)
)
export class ExplodeTankProjectileSystem extends System {
  protected onExecute(filtered: Filtered, projectile: Entity): void {
    this.createExplosion(projectile);
    this.createCracks(projectile);
  }

  private createExplosion(projectile: Entity): void {
    const { position, parent } = projectile.get(Container);
    const { type } = projectile.get(ProjectileComponent);

    CreateParticleEvent.emit({
      position,
      parent,
      collection: VFXType.Particles,
      view: type,
    });
  }

  private createCracks(projectile: Entity): void {
    const { x, y } = projectile.get(Container).getGlobalPosition();

    const cracksParent = PixiRenderer.Application.stage.getChildByName(
      ViewName.GroundCracks,
      true
    ) as Container;

    const cracksPosition = cracksParent.toLocal({ x, y });

    CreateParticleEvent.emit({
      position: cracksPosition,
      parent: cracksParent,
      collection: VFXType.Decals,
      view: DecalKey.GroundCracks,
    });
  }
}
