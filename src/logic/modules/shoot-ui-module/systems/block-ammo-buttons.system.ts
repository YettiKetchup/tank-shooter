import { System, Filtered, Includes, Excludes } from 'mysh-pixi';
import { ButtonPointerDown, DisabledButtonComponent } from '@shared/modules';
import { AmmoCountComponent } from '../components';

@Includes(AmmoCountComponent)
@Excludes(ButtonPointerDown)
export class BlockAmmoButtons extends System {
  public readonly block: boolean = true;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const entity$ = entity.observable();

      if (this.block && !entity.has([DisabledButtonComponent])) {
        entity$.add(new DisabledButtonComponent());
      } else if (!this.block && entity.has([DisabledButtonComponent])) {
        entity$.remove(DisabledButtonComponent);
      }
    });
  }
}
