import { ShootButtonComponent } from '@views/ui';

import {
  ButtonHoldedComponent,
  ButtonPointerDown,
  DisabledButtonComponent,
} from '@features/interactive';

import {
  Filtered,
  System,
  Includes,
  Excludes,
  OnChanges,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(ShootButtonComponent)
@Excludes(ButtonPointerDown)
export class BlockAmmoButtons extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const entity$ = entity.observable();
      const isBlocked = entity.has([DisabledButtonComponent]);

      if (!isBlocked) {
        entity$.add(new DisabledButtonComponent());
      }
    });
  }
}
