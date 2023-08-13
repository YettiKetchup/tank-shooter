import { Container } from '@pixi/display';
import { ChangableDisabledAlpha, DisabledButtonComponent } from '../components';
import {
  Filtered,
  System,
  Includes,
  Excludes,
  OnChanges,
  WatchFor,
} from 'mysh-pixi';

@Includes(Container, ChangableDisabledAlpha)
@Excludes(DisabledButtonComponent)
@OnChanges(WatchFor.Removed, DisabledButtonComponent)
export class EnableChildrenAlpha extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const alpha = entity.get(ChangableDisabledAlpha);
      const container = entity.get(Container);

      container.children.forEach((child) => {
        child.alpha = alpha.onEnable;
      });
    });
  }
}
