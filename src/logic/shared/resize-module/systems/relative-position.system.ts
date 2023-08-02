import {
  PixiEntity,
  System,
  SystemEntitiesCollection,
  Includes,
} from 'mysh-pixi';

import {
  RelativePositionLandscape,
  RelativePositionPortrait,
} from '../components';

import { Container } from 'pixijs';
import { PixiOrientation } from '../data/types';
import { ResizeModule } from '../resize.module';

@Includes(RelativePositionLandscape, RelativePositionPortrait, Container)
export class RelativePositionSystem extends System<PixiEntity> {
  constructor(private _orientation: PixiOrientation) {
    super();
  }

  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    entities.loop((entity) => {
      const container = entity.get(Container);
      let position =
        this._orientation === 'landscape'
          ? entity.get(RelativePositionLandscape)
          : entity.get(RelativePositionPortrait);

      const widthDelta = this.getWidthDelta();
      const heightDelta = this.getHeightDelta();
      const x = position.x * widthDelta;
      const y = position.y * heightDelta;
      container.position.set(x, y);
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
