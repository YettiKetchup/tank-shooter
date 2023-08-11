import { CrossairComponent } from '@systems/crossair';
import { ProjectileFallComponent } from '@systems/projectile';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Added, ProjectileFallComponent)
@Includes(CrossairComponent)
export class DestroyCrossairSystem extends System {
  protected onExecute(entities: Filtered): void {
    entities.loop((entity) => entity.destroy());
  }
}
