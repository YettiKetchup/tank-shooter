import { Application } from 'pixijs';
import { PixiRenderer } from './pixi.renderer';
import { GameStage } from '@stages/game-stage';
import { manifest } from '@shared/aseets';
import { stageList } from './data/stage.list';
import { AssetsLoader, StageController } from 'mysh-pixi';
import { ResizeModuleConfig } from '@shared/resize-module';

export class Game {
  public async init(): Promise<void> {
    const pixi = new PixiRenderer();

    this.registerStages(pixi.application);
    await this.loadManifest();
    this.loadInitialScene();
    this.update(pixi.application);
    this.appendToDOM(pixi.application);
    this.connectDebugger(pixi.application);
  }

  private registerStages(app: Application): void {
    stageList(app).forEach((stage) => {
      StageController.register(stage);
    });
  }

  private async loadManifest(): Promise<void> {
    await AssetsLoader.init({ manifest });
  }

  private loadInitialScene(): void {
    StageController.load(GameStage);
  }

  private update(app: Application): void {
    app.ticker.add((dt) => {
      StageController.update(dt);
    });
  }

  private appendToDOM(app: Application): void {
    const node = document.body.appendChild(app.view as any);
    node.style.position = 'absolute';
    node.style.top = 0;
    node.style.bottom = 0;
    node.style.left = 0;
    node.style.right = 0;

    ResizeModuleConfig.NODE = node;

    ResizeModuleConfig.LANDSCAPE = {
      width: 1366,
      height: 768,
    };

    ResizeModuleConfig.PORTRAIT = {
      width: 780,
      height: 1688,
    };

    /**
     * Handle resize and change stage size.
     */
    new ResizeObserver(() => {
      app.stage.x = app.view.width / 2;
      app.stage.y = app.view.height / 2;

      ResizeModuleConfig.CURRENT_WIDTH = node.width;
      ResizeModuleConfig.CURRENT_HEIGHT = node.height;
    }).observe(node);
  }

  private connectDebugger(app: Application): void {
    //@ts-ignore
    globalThis.__PIXI_APP__ = app;
  }
}
