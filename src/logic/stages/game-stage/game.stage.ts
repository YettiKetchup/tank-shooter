import { RootView } from './views/root.view';
import { AssetsLoader, PixiStage, Root, Modules } from 'mysh-pixi';
import { InteractiveModule } from '@shared/modules/interactive-module';
import { TankModule } from '@widgets/tank-module/tank.module';
import { ResizeModule } from '@shared/modules/resize-module';
import { TilesGeneratorModule } from '@shared/modules/tiles-generator-module';
import { StorageKey } from '@shared/data';
import { ShootUIModule } from '@modules/shoot-ui-module';
import { EndScreenModule } from '@modules/end-screen-module';
import { ParticleModule } from '@shared/modules/particle-module';
import { DecalModule } from '@shared/modules';

@Root(RootView)
@Modules(
  new InteractiveModule([StorageKey.Game, StorageKey.UI]),
  new ResizeModule([StorageKey.Game, StorageKey.UI]),
  new TilesGeneratorModule([StorageKey.Game]),
  new DecalModule([StorageKey.Game]),
  new ParticleModule(),
  new ShootUIModule(),
  new TankModule(),
  new EndScreenModule()
)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle('game_screen');
  }
}
