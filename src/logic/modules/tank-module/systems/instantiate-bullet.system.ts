import { PixiEntity, System, SystemEntitiesCollection } from 'mysh-pixi';

export class InstantiateBulletSystem extends System<PixiEntity> {
  protected onExecute(entities: SystemEntitiesCollection<PixiEntity>): void {
    throw new Error('Method not implemented.');
  }
}
