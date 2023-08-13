import { DisabledButtonComponent } from '@features/interactive';
import { StorageKey } from '@shared/data';

import {
  AmmoCountComponent,
  ShootButtonComponent,
} from '@entities/ui/shoot-button';

import {
  ProjectileFallComponent,
  TankProjectileComponent,
} from '@features/shooter';

import {
  Collection,
  Filtered,
  Includes,
  OnChanges,
  System,
  WatchFor,
  includesPipe,
} from 'mysh-pixi';

@OnChanges(
  WatchFor.Added,
  ProjectileFallComponent,
  includesPipe(TankProjectileComponent)
)
@Includes(ShootButtonComponent, AmmoCountComponent)
@Collection([StorageKey.UI])
export class EnableShootButtonsSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const { value } = entity.get(AmmoCountComponent);

      if (value > 0) {
        const entity$ = entity.observable();
        entity$.remove(DisabledButtonComponent);
      }
    });
  }
}
