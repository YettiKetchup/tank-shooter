import { AssetsLoader, Modules, PixiStage, Root } from 'mysh-pixi';
import { RootView } from './views/root.view';
import { TilesGeneratorModule } from '@features/tiles-generator';
import { StorageKey } from '@shared/data';
import { ResizeModule } from '@features/resize';
import { InteractiveModule } from '@features/interactive';
import { ShootUIModule } from '@modules/shoot-ui';
import { IntersectionModule } from '@features/intersection';
import { ParticlesModule } from '@features/particles';
import { BattleModule } from '@widgets/battle/battle.module';
import { EndGameModule } from '@widgets/end-game';
import { DecalsModule } from '@modules/decals/decals.module';
import { CrossairModule } from '@modules/crossair';
import { ProjectileModule } from '@modules/projectile';
import { TankModule } from '@modules/tank';

@Root(RootView)
@Modules(
  new IntersectionModule(StorageKey.Game),
  new TilesGeneratorModule(StorageKey.Game),
  new ResizeModule(StorageKey.Game),
  new ParticlesModule(StorageKey.Particles),
  new DecalsModule(StorageKey.Game),
  new BattleModule(StorageKey.Game),
  new CrossairModule(StorageKey.Game),
  new ProjectileModule(StorageKey.Game),
  new TankModule(StorageKey.Game),
  new ResizeModule(StorageKey.UI),
  new InteractiveModule(StorageKey.UI),
  new ShootUIModule(StorageKey.UI),
  new EndGameModule(StorageKey.UI)
)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle('game_screen');
  }
}
