import { Entity, Filtered, System } from 'mysh-pixi';

export class DestroyEntitySystem extends System {
  protected onExecute(entities: Filtered<Entity>): void {
    entities.loop((entity) => {
      this.collection.destroy(entity);
    });
  }
}
