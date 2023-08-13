import { Container } from '@pixi/display';
import { orientation } from '../utils';
import { Filtered, System, Includes, OnEvent } from 'mysh-pixi';
import { ResizeEvent } from '../events';
import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '../components';

@OnEvent(ResizeEvent)
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
