import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ProjectileComponent } from '../components';
import { getAmmoData } from '@modules/shoot-ui-module';

@Includes(ProjectileComponent)
export class AnimateProjectileSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const { distance, type } = entity.get(ProjectileComponent);
      const { flyDistance } = getAmmoData(type);

      const flyTo = distance * flyDistance;

      console.log(flyTo);
    });
  }
}
