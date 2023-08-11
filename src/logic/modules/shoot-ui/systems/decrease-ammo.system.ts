import { Container } from '@pixi/display';
import { Text } from '@pixi/text';
import { ButtonPointerDown } from '@features/interactive';
import { AmmoCountComponent, ShootButtonComponent } from '@views/ui';
import {
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
@Includes(Container, AmmoCountComponent, ButtonPointerDown)
export class DecreaseAmmoSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => {
      const ammo = entity.get(AmmoCountComponent);
      const container = entity.get(Container);

      const label = container.children.find(
        (child) => child instanceof Text
      ) as Text;

      ammo.value -= 1;
      label.text = `${ammo.value}x`;
    });
  }
}
