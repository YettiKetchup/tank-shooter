import { Container } from '@pixi/display';
import { orientation } from '../utils';
import { PivotLandscapeComponent, PivotPortraitComponent } from '../components';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

@OnHook(Lifecycle.Update)
@Includes(PivotLandscapeComponent, PivotPortraitComponent, Container)
export class PivotSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let pivot =
        orientation() === 'landscape'
          ? entity.get(PivotLandscapeComponent)
          : entity.get(PivotPortraitComponent);

      let { x, y, isRelative } = pivot;

      if (isRelative) {
        const { width, height } = container.getBounds();
        x = pivot.x * (width / 2);
        y = pivot.y * (height / 2);
      }

      container.pivot.set(x, y);
    });
  }
}
