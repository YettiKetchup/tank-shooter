import { System, Filtered, Includes, Excludes } from 'mysh-pixi';
import { ButtonPointerDown, DisabledButtonComponent } from '@shared/modules';
import { AmmoCountComponent } from '../components';

@Includes(AmmoCountComponent)
@Excludes(ButtonPointerDown)
export class BlockAmmoButtons extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const entity$ = entity.observable();

      if (!entity.has([DisabledButtonComponent])) {
        entity$.add(new DisabledButtonComponent());
      }
    });
  }
}
