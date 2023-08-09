import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { ParticleContainerComponent } from '../components';

@Includes(ParticleContainerComponent)
export class CreateParticleSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {});
  }
}
