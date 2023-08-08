import { Entity, Filtered, System, Includes } from 'mysh-pixi';
import { HealthbarComponent } from '../components';
import { Sprite } from 'pixijs';

@Includes(Sprite, HealthbarComponent)
export class ChangeHealthSystem extends System {
  public readonly health: number = 100;

  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      const sprite = entity.get(Sprite);
      const valueBar = sprite.children[0];
      valueBar.scale.x = this.health / 100;
    });
  }
}
