import { Container } from '@pixi/display';
import { ButtonHoldableComponent, ButtonHoldedComponent } from '../components';
import {
  Filtered,
  System,
  Includes,
  OnHook,
  Lifecycle,
  ObservableEntity,
} from 'mysh-pixi';

@OnHook(Lifecycle.Init)
@Includes(ButtonHoldableComponent, Container)
export class HoldPointerSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      let intervalId: ReturnType<typeof setInterval>;
      const entity$ = entity.observable();
      const container = entity.get(Container);

      container.interactive = true;

      container.on('pointerdown', () => {
        intervalId = setInterval(() => {
          if (!entity.has([ButtonHoldedComponent])) {
            entity$.add(new ButtonHoldedComponent());
          } else {
            const holded$ = entity.get(ButtonHoldedComponent, true);
            holded$.frames += 1;
          }
        }, 16);
      });

      container.on('pointerup', () => {
        this.reset(entity$, intervalId);
      });

      container.on('pointerleave', () => {
        this.reset(entity$, intervalId);
      });
    });
  }

  private reset(
    entity$: ObservableEntity,
    timeoutId: ReturnType<typeof setInterval>
  ): void {
    clearInterval(timeoutId);
    if (entity$.instance.has([ButtonHoldedComponent])) {
      entity$.remove(ButtonHoldedComponent);
    }
  }
}
