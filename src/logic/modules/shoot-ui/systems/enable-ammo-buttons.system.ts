import { AmmoCountComponent, ShootButtonComponent } from '@views/ui';
import { ProjectileFallComponent } from '@systems/projectile';
import { DisabledButtonComponent } from '@features/interactive';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(ShootButtonComponent, AmmoCountComponent)
export class EnableAmmoButtons extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const { value } = entity.get(AmmoCountComponent);
      const entity$ = entity.observable();
      const isBlocked = entity.has([DisabledButtonComponent]);

      if (isBlocked) {
        if (value > 0) entity$.remove(DisabledButtonComponent);
      }
    });
  }
}
