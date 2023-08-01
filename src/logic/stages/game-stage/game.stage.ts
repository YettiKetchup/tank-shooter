import { AssetBunble } from '@shared/aseets';
import { AssetsLoader, PixiStage, Root } from '@shared/mysh-pixi';
import { RootView } from './views/root.view';

@Root(RootView)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle(AssetBunble.GameScreen);
  }
}
