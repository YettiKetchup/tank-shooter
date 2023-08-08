import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ProjectileComponent } from '../components';

@Includes(ProjectileComponent)
export class SetProjectileDelta extends System {
  public readonly distanceDelta: number = 0;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const projectile = entity.get(ProjectileComponent);
      projectile.distanceDelta = this.distanceDelta;
    });
  }
}
