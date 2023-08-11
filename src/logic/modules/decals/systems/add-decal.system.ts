import '@pixi/mixin-get-global-position';
import { Container } from '@pixi/display';
import { DecalableComponent } from '@components/decals';
import { ProjectileFallComponent } from '@systems/projectile';
import { DecalView } from '../views';
import {
  Entity,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
} from 'mysh-pixi';
import { Sprite } from '@pixi/sprite';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(Container, DecalableComponent)
export class AddDecalSystem extends System<Entity> {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const { x, y } = data.get(Sprite).getGlobalPosition();

      const decal = DecalView();
      const container = entity.get(Container);
      const point = container.toLocal({ x: x, y: y });

      decal.x = point.x;
      decal.y = point.y;

      container.addChild(decal);
    });
  }
}
