import { Container } from '@pixi/display';
import { SmartFitComponent } from '../components';
import { ResizeConfig } from '../data/resize.config';
import { Filtered, System, Includes, OnHook, Lifecycle } from 'mysh-pixi';

@OnHook(Lifecycle.Update)
@Includes(SmartFitComponent, Container)
export class SmartFitSystem extends System {
  protected onExecute(entities: Filtered): void {
    const { currentWidth, currentHeight } = ResizeConfig;

    entities.loop((entity) => {
      const container = entity.get(Container);
      const zoneAspect = currentWidth / currentHeight;
      const nodeAspect = container.width / container.height;

      const originalWidth = container.width;
      const originalHeight = container.height;

      let height = 0;
      let width = 0;

      if (nodeAspect > zoneAspect) {
        width = (currentHeight * originalWidth) / originalHeight;
        height = currentHeight;
      } else {
        height = (currentWidth * originalHeight) / originalWidth;
        width = currentWidth;
      }

      container.width = width;
      container.height = height;
    });
  }
}
