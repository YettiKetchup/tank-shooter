import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';
import { CrossairView } from '../views';

@Includes(PlayerTankComponent)
export class InstantiateCrossairSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    // entities.loop((entity) => {
    //   const { shootPoint } = entity.get(PlayerTankComponent);
    //   const crossair = CrossairView();
    //   shootPoint.addChild(crossair);
    // });
  }
}
