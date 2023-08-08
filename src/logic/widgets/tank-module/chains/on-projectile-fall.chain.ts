import { ChainBuilder } from 'mysh-pixi';
import { EnemyTankComponent, ProjectileComponent } from '../components';
import { DamageTankSystem } from '../systems';
import { DetectIntersectionSystem } from '@shared/modules';

export const OnProjectileFallChain = (projectile: ProjectileComponent) => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(DetectIntersectionSystem)
    .withSystem(DamageTankSystem, {damage: projectile.damage})
      .withIncludes(EnemyTankComponent)
  .build();
};

/**
 * Чек коллиззи с танком
 * Нанести урон танку
 * Убавить хп у танка
 * Уничтожить снаряд
 * Уничтожить перекрестие
 * Партиклі взріва
 * Разблокировать кнопки
 */
