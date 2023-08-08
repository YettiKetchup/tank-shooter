import { ChainBuilder } from 'mysh-pixi';
import { PlayerTankComponent } from '../components';
import { ProjectileData } from '@shared/data';
import {
  InstantiateCrossairSystem,
  InstantiateProjectileSystem,
  ShowCrossairSystem,
} from '../systems';

export const StartShootChain = (projectileData: ProjectileData) => {
  const { flyDistance, type } = projectileData;

  //prettier-ignore
  return new ChainBuilder()
    .withSystem(InstantiateCrossairSystem, {flyDistance})
      .withIncludes(PlayerTankComponent)
    .withSystem(ShowCrossairSystem, {show: false})
    .withSystem(InstantiateProjectileSystem, {type})
      .withIncludes(PlayerTankComponent)
    .build();
};
