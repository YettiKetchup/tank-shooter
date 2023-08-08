import { IntersectedComponent } from '@shared/modules';
import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { TankComponent } from '../components/tank.component';

@Includes(IntersectedComponent, TankComponent)
export class DamageTankSystem extends System {
  public readonly damage: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      let { health } = entity.get(TankComponent);

      health -= this.damage;
      if (health <= 0) health = 0;

      const tank$ = entity.get(TankComponent, true);
      tank$.health = health;
    });
  }
}
