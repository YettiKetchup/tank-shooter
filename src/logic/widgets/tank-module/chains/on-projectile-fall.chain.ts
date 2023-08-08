import { ChainBuilder } from 'mysh-pixi';
import { ProjectileComponent } from '../components';

export const OnProjectileFallChain = (projectile: ProjectileComponent) => {
  //prettier-ignore
  return new ChainBuilder()
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
