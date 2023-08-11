import { Sprite } from '@pixi/sprite';
import { System, Filtered, Includes } from 'mysh-pixi';
import { PixiOrientation } from '../data/types';

import {
  AnchorLandscapeComponent,
  AnchorPortraitComponent,
} from '../components';

@Includes(AnchorLandscapeComponent, AnchorPortraitComponent, Sprite)
export class AnchorSystem extends System {
  public readonly orientation: PixiOrientation = 'landscape';

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      let anchor =
        this.orientation === 'landscape'
          ? entity.get(AnchorLandscapeComponent)
          : entity.get(AnchorPortraitComponent);

      sprite.anchor.set(anchor.x, anchor.y);
    });
  }
}
