import { AssetsLoader, Modules, PixiStage, Root } from 'mysh-pixi';
import { RootView } from './views/root.view';
import { StorageKey } from '@shared/data';
import { IntersectionModule } from '@features/intersection';
import { ShooterModule } from '@features/shooter';
import { ProjectileAPI } from '@shared/api/projectiles';
import { TilesGeneratorModule } from '@features/tiles-generator';
import { DamageModule } from '@features/damage';
import { TankModule } from '@widgets/tank';
import { TankAPI } from '@shared/api/tanks';
import { InteractiveModule } from '@features/interactive';
import { ResizeModule } from '@features/resize';
import { BattleModule } from '@modules/battle-module/battle.module';
import { PowerbarModule } from '@widgets/power-bar';
import { HealthbarModule } from '@widgets/healthbar';
import { CrossairModule } from '@widgets/crossair';
import { VFXMapper, VFXModule } from '@features/vfx';
import { DecalKey, ParticleKey, VFXType } from '@shared/data/vfx-key.enum';
import {
  SmallExplosionView,
  MediumExplosionView,
  BigExplosionView,
  CracksView,
} from '@entities/vfx';
import { EndGameModule } from '@modules/end-game';

@Root(RootView)
@Modules(
  new ResizeModule(StorageKey.UI),
  new InteractiveModule(StorageKey.UI),
  new PowerbarModule(StorageKey.UI),
  new HealthbarModule(StorageKey.UI),
  new ResizeModule(StorageKey.Game),
  new IntersectionModule(StorageKey.Game),
  new TilesGeneratorModule(StorageKey.Game),
  new ShooterModule(StorageKey.Game),
  new DamageModule(StorageKey.Game),
  new CrossairModule(StorageKey.Game),
  new TankModule(StorageKey.Game),
  new BattleModule(StorageKey.Game),
  new VFXModule(StorageKey.VFX),
  new EndGameModule(StorageKey.UI)
)
export class GameStage extends PixiStage {
  public async preload(): Promise<void> {
    await AssetsLoader.loadBundle('game_screen');
    await ProjectileAPI.fetch('');
    await TankAPI.fetch('');
  }

  public preInit(): void {
    super.preInit();
    VFXMapper.add(
      VFXType.Particles,
      ParticleKey.SmallExplosion,
      SmallExplosionView
    );

    VFXMapper.add(
      VFXType.Particles,
      ParticleKey.MediumExplosion,
      MediumExplosionView
    );

    VFXMapper.add(
      VFXType.Particles,
      ParticleKey.BigExplosion,
      BigExplosionView
    );

    VFXMapper.add(VFXType.Decals, DecalKey.GroundCracks, CracksView);
  }
}
