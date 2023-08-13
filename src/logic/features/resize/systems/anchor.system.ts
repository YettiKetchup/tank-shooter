import { Sprite } from '@pixi/sprite';
import { orientation } from '../utils';
import { Filtered, System, Includes, OnEvent } from 'mysh-pixi';
import { ResizeEvent } from '../events';
import {
  AnchorLandscapeComponent,
  AnchorPortraitComponent,
} from '../components';

@OnEvent(ResizeEvent)
@Includes(AnchorLandscapeComponent, AnchorPortraitComponent, Sprite)
export class AnchorSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const sprite = entity.get(Sprite);
      let anchor =
        orientation() === 'landscape'
          ? entity.get(AnchorLandscapeComponent)
          : entity.get(AnchorPortraitComponent);

      sprite.anchor.set(anchor.x, anchor.y);
    });
  }
}
