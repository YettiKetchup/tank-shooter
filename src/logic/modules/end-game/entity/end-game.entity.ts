import { EntitiesCollection, Entity } from 'mysh-pixi';
import { EndGameWatcherComponent } from '../components';

export const EndGameEntity = (collection: EntitiesCollection) => {
  const entity = new Entity();

  entity.add(new EndGameWatcherComponent());
  collection.add(entity);
};
