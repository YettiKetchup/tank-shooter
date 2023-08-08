import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ShootButtonComponent } from '../components';

@Includes(ShootButtonComponent)
export class SetShootDistance extends System {
  public readonly distance: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const shootButton = entity.get(ShootButtonComponent);
      shootButton.distance = this.distance;
    });
  }
}
