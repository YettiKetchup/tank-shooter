import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { ProjectileComponent } from '../components';

export const OnProjectileFallChain = (
  collection: EntitiesCollection,
  projectile: ProjectileComponent
) => {
  //prettier-ignore
  return new ChainBuilder(collection)
  .build();
};

/**
 * Нанести урон танку
 * Убавить хп у танка
 * Уничтожить снаряд
 * Уничтожить перекрестие
 * Партиклі взріва
 * Разблокировать кнопки
 */
