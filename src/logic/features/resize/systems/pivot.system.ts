import { Container } from '@pixi/display';
import { orientation } from '../utils';
import { PivotLandscapeComponent, PivotPortraitComponent } from '../components';
import { Filtered, System, Includes, OnEvent } from 'mysh-pixi';
import { ResizeEvent } from '../events';

@OnEvent(ResizeEvent)
@Includes(PivotLandscapeComponent, PivotPortraitComponent, Container)
export class PivotSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
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
