import { Filtered, Includes, OnChanges, System, WatchFor } from 'mysh-pixi';
import { CrossairComponent } from '../components';
import { ProjectileFallComponent } from '@features/shooter';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(CrossairComponent)
export class DestroyCrossairSystem extends System {
  protected onExecute(filtered: Filtered): void {
    filtered.loop((entity) => {
      entity.destroy();
    });
  }
}
