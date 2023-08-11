import { CrossairView } from '../views';
import { TankComponent } from '@views/tank';
import { ButtonPointerDown } from '@features/interactive';
import { ShootButtonComponent } from '@views/ui';
import { getProjectileData } from '@shared/data';
import {
  Entity,
  Filtered,
  System,
  Includes,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  ButtonPointerDown,
  includesPipe(ShootButtonComponent)
)
@Includes(TankComponent)
export class InstantiateCrossairSystem extends System {
  protected onExecute(entities: Filtered, data: Entity): void {
    entities.loop((entity) => {
      const shootButton = data.get(ShootButtonComponent);
      const { flyDistance } = getProjectileData(shootButton.type);
      const { shootPoint } = entity.get(TankComponent);

      const crossair = CrossairView(flyDistance);
      crossair.alpha = 0;
      shootPoint.addChild(crossair);
    });
  }
}
