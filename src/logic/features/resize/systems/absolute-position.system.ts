import { Container } from '@pixi/display';
import { orientation } from '../utils';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '../components';

@OnHook(Lifecycle.Update)
@Includes(PositionLandscapeComponent, PositionPortraitComponent, Container)
export class AbsolutePositionSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const container = entity.get(Container);
      let position =
        orientation() === 'landscape'
          ? entity.get(PositionLandscapeComponent)
          : entity.get(PositionPortraitComponent);

      container.position.set(position.x, position.y);
    });
  }
}
