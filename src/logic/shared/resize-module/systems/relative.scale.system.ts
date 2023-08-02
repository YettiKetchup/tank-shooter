import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import { RelativeScaleLandscape, RelativeScalePortrait } from '../components';

import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';
import { ResizeModule } from '../resize.module';

@Includes(RelativeScaleLandscape, RelativeScalePortrait, Container)
export class RelativeScaleSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let scale =
        this._orientation === 'landscape'
          ? entity.get(RelativeScaleLandscape)
          : entity.get(RelativeScalePortrait);

      const widthDelta = this.getWidthDelta();
      const heightDelta = this.getHeightDelta();
      const x = scale.x * widthDelta;
      const y = scale.y * heightDelta;

      if (this._orientation === 'landscape') {
        container.scale.set(x);
      } else {
        container.scale.set(y);
      }
    });
  }

  private getWidthDelta(): number {
    return this._orientation === 'landscape'
      ? ResizeModule.width / ResizeModule.designResolutionLandscape.width
      : ResizeModule.width / ResizeModule.designResolutionPortrait.width;
  }

  private getHeightDelta(): number {
    return this._orientation === 'landscape'
      ? ResizeModule.height / ResizeModule.designResolutionLandscape.height
      : ResizeModule.height / ResizeModule.designResolutionPortrait.height;
  }
}
