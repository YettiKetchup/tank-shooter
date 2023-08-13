import { Sprite } from '@pixi/sprite';
import { orientation } from '../utils';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

import {
  AnchorLandscapeComponent,
  AnchorPortraitComponent,
} from '../components';

@OnHook(Lifecycle.Update)
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
