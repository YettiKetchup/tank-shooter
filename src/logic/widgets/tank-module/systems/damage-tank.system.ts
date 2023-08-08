import { IntersectedComponent } from '@shared/modules';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { TankComponent } from '../components/tank.component';

@Includes(IntersectedComponent, TankComponent)
export class DamageTankSystem extends System {
  public readonly damage: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const tank$ = entity.get(TankComponent, true);
      tank$.health -= this.damage;
    });
  }
}
