import { Container } from '@pixi/display';
import { ChangableDisabledAlpha, DisabledButtonComponent } from '../components';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';

@Includes(Container, ChangableDisabledAlpha)
@OnChanges(WatchFor.Added, DisabledButtonComponent)
export class DisabledChildrenAlpha extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const alpha = entity.get(ChangableDisabledAlpha);
      const container = entity.get(Container);

      container.children.forEach((child) => {
        child.alpha = alpha.onDisable;
      });
    });
  }
}
