import { Container } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';
import { PivotLandscapeComponent, PivotPortraitComponent } from '../components';

@Includes(PivotLandscapeComponent, PivotPortraitComponent, Container)
export class PivotSystem extends System {
  public readonly orientation: PixiOrientation = 'landscape';

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let pivot =
        this.orientation === 'landscape'
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
