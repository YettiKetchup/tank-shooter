import { System, Filtered, Includes } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';
import { ProjectileType } from '@shared/data';
import { ProjectileView } from '../views/projectile/projectile.view';

@Includes(PlayerTankComponent)
export class InstantiateProjectileSystem extends System {
  public readonly type: ProjectileType = 'small';
  public readonly damage: number = 0;
  public readonly distance: number = 0;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      // const shootPoint = entity.get(PlayerTankComponent).shootPoint;
      // const projectile = ProjectileView(this.type, this.damage, this.distance);
      // shootPoint.addChild(projectile);
    });
  }
}
