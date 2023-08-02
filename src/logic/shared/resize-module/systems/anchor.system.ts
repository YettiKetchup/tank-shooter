import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { Sprite } from 'pixijs';
import { PixiOrientation } from '../data/types';

import {
  AnchorLandscapeComponent,
  AnchorPortraitComponent,
} from '../components';

@Includes(AnchorLandscapeComponent, AnchorPortraitComponent, Sprite)
export class AnchorSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      let anchor =
        this._orientation === 'landscape'
          ? entity.get(AnchorLandscapeComponent)
          : entity.get(AnchorPortraitComponent);

      sprite.anchor.set(anchor.x, anchor.y);
    });
  }
}
