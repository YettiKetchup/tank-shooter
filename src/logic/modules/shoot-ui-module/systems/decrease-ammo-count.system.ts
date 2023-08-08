import { Container, Text } from 'pixijs';
import { System, Filtered, Includes } from 'mysh-pixi';
import { ButtonPointerDown } from '@shared/modules';
import { AmmoCountComponent } from '../components';

@Includes(Container, AmmoCountComponent, ButtonPointerDown)
export class DecreaseAmmoCount extends System {
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
