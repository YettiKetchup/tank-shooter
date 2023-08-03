import { RootView } from './views/root.view';
import { AssetsLoader, PixiStage, Root, Modules } from 'mysh-pixi';
import { InteractiveModule } from '@shared/interactive-module';
import { TankModule } from '@modules/tank-module/tank.module';
import { ResizeModule } from '@shared/resize-module';

@Root(RootView)
@Modules(
  new InteractiveModule(['game']),
  new ResizeModule(['game']),
  new TankModule()
)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle('game_screen');
  }
}
