import { System, Filtered, Includes, Excludes } from 'mysh-pixi';
import { ButtonPointerDown, DisabledButtonComponent } from '@shared/modules';
import { AmmoCountComponent } from '../components';

@Includes(AmmoCountComponent)
@Excludes(ButtonPointerDown)
export class BlockAmmoButtons extends System {
  public readonly needBlock: boolean = true;

  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const entity$ = entity.observable();
      const ammo = entity.get(AmmoCountComponent);
      const isBlocked = entity.has([DisabledButtonComponent]);

      if (this.needBlock && !isBlocked) {
        entity$.add(new DisabledButtonComponent());
      } else if (!this.needBlock && isBlocked && ammo.value > 0) {
        entity$.remove(DisabledButtonComponent);
      }
    });
  }
}
