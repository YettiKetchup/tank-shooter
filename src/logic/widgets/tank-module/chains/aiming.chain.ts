import { ShootIndicatorComponent } from '@modules/shoot-ui-module/components';
import { ChainBuilder } from 'mysh-pixi';
import { AnimateGunkOnHold, MoveCrossairSystem } from '../systems';
import { SetProjectileDelta } from '@modules/projectile-module';

export const AimingChain = (indicator: ShootIndicatorComponent) => {
  //prettier-ignore
  return new ChainBuilder()
    .withSystem(AnimateGunkOnHold, {indicatorValue: indicator.value})
    .withSystem(MoveCrossairSystem, {distanceDelta: indicator.value})
    .withSystem(SetProjectileDelta, {distanceDelta: indicator.value})
  .build()
};
