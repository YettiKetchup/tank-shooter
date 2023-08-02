import { AssetBunble } from '@shared/aseets';
import { RootView } from './views/root.view';
import { AssetsLoader, PixiStage, Root } from 'mysh-pixi';

@Root(RootView)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle(AssetBunble.GameScreen);
  }
}
