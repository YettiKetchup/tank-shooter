import { Container } from '@pixi/display';
import { IntersectableComponent, IntersectedComponent } from '../components';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

@OnHook(Lifecycle.Update)
@Includes(Container, IntersectableComponent)
export class DetectIntersectionSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const a = entity.get(Container);

      for (let i = 0; i < entities.count; i++) {
        if (entity === entities.list[i]) continue;

        const b = entities.list[i].get(Container);
        const isIntersect = this.isIntersects(a, b);

        const entity$ = entity.observable();

        if (isIntersect && !entity.has([IntersectedComponent])) {
          entity$.add(new IntersectedComponent());
        } else if (!isIntersect && entity.has([IntersectedComponent])) {
          entity$.remove(IntersectedComponent);
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
