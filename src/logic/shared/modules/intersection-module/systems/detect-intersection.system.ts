import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { IntersectableComponent, IntersectedComponent } from '../components';
import { Container } from 'pixijs';

@Includes(Container, IntersectableComponent)
export class DetectIntersectionSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const a = entity.get(Container);

      for (let i = 0; i < entities.count; i++) {
        if (entity === entities.list[i]) continue;

        const b = entities.list[i].get(Container);
        const isIntersect = this.isIntersects(a, b);

        if (isIntersect && !entity.has([IntersectedComponent])) {
          entity.add(new IntersectedComponent());
        } else if (!isIntersect && entity.has([IntersectedComponent])) {
          entity.remove(IntersectedComponent);
        }
      }
    });
  }

  private isIntersects(a: Container, b: Container): boolean {
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return (
      aBox.x + aBox.width > bBox.x &&
      aBox.x < bBox.x + bBox.width &&
      aBox.y + aBox.height > bBox.y &&
      aBox.y < bBox.y + bBox.height
    );
  }
}
