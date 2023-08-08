import { System, Filtered, Includes } from 'mysh-pixi';
import { ProjectileType } from '@shared/data';
import { ProjectileView } from '../views/projectile/projectile.view';
import { TankComponent } from '../components/tank.component';

@Includes(TankComponent)
export class InstantiateProjectileSystem extends System {
  public readonly type: ProjectileType = 'small';

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const { shootPoint } = entity.get(TankComponent);

      const projectile = ProjectileView(this.type);
      projectile.alpha = 0;
      shootPoint.addChild(projectile);
    });
  }
}
