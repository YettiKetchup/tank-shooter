import { Entity, Filtered, System } from 'mysh-pixi';

export class RestartGameSystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    /**
     * I really wanted to reload the scene, but at the last moment
     * it turned out that my StageController was a little broken.
     * Therefore, so. Sori :)
     */
    location.reload();
  }
}
