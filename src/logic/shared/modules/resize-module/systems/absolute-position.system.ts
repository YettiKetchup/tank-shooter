import { Container } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '../components';

@Includes(PositionLandscapeComponent, PositionPortraitComponent, Container)
export class AbsolutePositionSystem extends System {
  public readonly orientation: PixiOrientation = 'landscape';

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let position =
        this.orientation === 'landscape'
          ? entity.get(PositionLandscapeComponent)
          : entity.get(PositionPortraitComponent);

      container.position.set(position.x, position.y);
    });
  }
}
