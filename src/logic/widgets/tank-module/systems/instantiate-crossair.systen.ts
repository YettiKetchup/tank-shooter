import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { CrossairView } from '../views';
import { TankComponent } from '../components/tank.component';

@Includes(TankComponent)
export class InstantiateCrossairSystem extends System {
  public readonly flyDistance: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const { shootPoint } = entity.get(TankComponent);
      const crossair = CrossairView(this.flyDistance);
      shootPoint.addChild(crossair);
    });
  }
}
