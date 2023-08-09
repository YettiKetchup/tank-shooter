import { Application } from '@pixi/app';
import '@pixi/events';

export class PixiRenderer {
  public static Application: Application;

  public get application(): Application {
    return PixiRenderer.Application;
  }

  constructor() {
    PixiRenderer.Application = new Application({
      background: '#1099bb',
      resizeTo: window,
    });
  }
}
