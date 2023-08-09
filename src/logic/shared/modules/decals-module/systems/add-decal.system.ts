import { Sprite } from '@pixi/sprite';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { DecalableComponent } from '../components';
import { Container } from '@pixi/display';

@Includes(Container, DecalableComponent)
export class AddDecalSystem extends System {
  public readonly decal: Sprite | null = null;
  public readonly x: number = 0;
  public readonly y: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      if (!this.decal) return;

      const container = entity.get(Container);
      const point = container.toLocal({ x: this.x, y: this.y });

      this.decal.x = point.x;
      this.decal.y = point.y;

      container.addChild(this.decal);
    });
  }
}
