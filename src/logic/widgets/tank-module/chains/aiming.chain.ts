import { ShootIndicatorComponent } from '@modules/shoot-ui-module/components';
import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { AnimateGunkOnHold, MoveCrossairSystem } from '../systems';
import { SetShootDistance } from '@modules/shoot-ui-module/systems';

export const AimingChain = (
  colelction: EntitiesCollection,
  indicator: ShootIndicatorComponent
) => {
  //prettier-ignore
  return new ChainBuilder(colelction)
    .withSystem(AnimateGunkOnHold, {indicatorValue: indicator.value})
    .withSystem(MoveCrossairSystem, {distanceDelta: indicator.value})
    .withSystem(SetShootDistance, {distance: indicator.value})
  .build()
};
