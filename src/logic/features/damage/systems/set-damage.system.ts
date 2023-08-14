import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';
import { HealthComponent, SetDamageComponent } from '../components';

@OnChanges(WatchFor.Added, SetDamageComponent)
@Includes(HealthComponent, SetDamageComponent)
export class SetDamageSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      const health$ = entity.get(HealthComponent, true);
      const damage = entity.get(SetDamageComponent);

      health$.value -= damage.value;

      entity.remove(SetDamageComponent);
    });
  }
}
