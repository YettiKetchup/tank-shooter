import { ShootButtonComponent } from '@entities/ui/shoot-button';
import { StorageKey } from '@shared/data';

import {
  ButtonHoldedComponent,
  DisabledButtonComponent,
} from '@features/interactive';

import {
  Collection,
  Filtered,
  Includes,
  Excludes,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Removed,
  ButtonHoldedComponent,
  includesPipe(ShootButtonComponent)
)
@Includes(ShootButtonComponent)
@Excludes(DisabledButtonComponent)
@Collection([StorageKey.UI])
export class DisableShootButtonsSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const entity$ = entity.observable();
      entity$.add(new DisabledButtonComponent());
    });
  }
}
