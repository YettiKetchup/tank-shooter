import { AmmoCountComponent } from '@entities/ui/shoot-button';
import { NeedShootComponent } from '@features/shooter';
import { Container } from '@pixi/display';
import { Text } from '@pixi/text';
import { StorageKey, ViewName } from '@shared/data';
import {
  Entity,
  Filtered,
  Includes,
  System,
  Collection,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@OnChanges(WatchFor.Added, NeedShootComponent)
@Includes(AmmoCountComponent)
@Collection([StorageKey.UI])
export class UpdateAmmoCount extends System {
  protected onExecute(filtered: Filtered, needShoot: Entity): void {
    const { type } = needShoot.get(NeedShootComponent);

    filtered.loop((entity) => {
      const ammoCount$ = entity.get(AmmoCountComponent, true);
      if (ammoCount$.type === type) {
        ammoCount$.value -= 1;

        // TODO: Move to other System!
        if (entity.has([Container])) {
          const sprite = entity.get(Container);
          const label = sprite.getChildByName(
            ViewName.ButtonAmmoCounter
          ) as Text;
          label.text = `${ammoCount$.value}x`;
        }
      }
    });
  }
}
