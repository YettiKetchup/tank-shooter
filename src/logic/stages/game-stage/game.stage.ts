import { RootView } from './views/root.view';
import { AssetsLoader, PixiStage, Root, Modules } from 'mysh-pixi';
import { InteractiveModule } from '@shared/interactive-module';
import { TankModule } from '@modules/tank-module/tank.module';
import { ResizeModule } from '@shared/resize-module';
import { TilesGeneratorModule } from '@shared/tiles-generator-module';
import { StorageKey } from '@shared/data';

@Root(RootView)
@Modules(
  new InteractiveModule([StorageKey.Game, StorageKey.UI]),
  new ResizeModule([StorageKey.Game, StorageKey.UI]),
  new TilesGeneratorModule([StorageKey.Game]),
  new TankModule()
)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle('game_screen');
  }
}
