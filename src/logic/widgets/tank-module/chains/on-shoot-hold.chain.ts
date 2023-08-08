import { ShootIndicatorComponent } from '@modules/shoot-ui-module/components';
import { ChainBuilder, EntitiesCollection } from 'mysh-pixi';
import { AnimateGunkOnHold } from '../systems';

export const OnSHootHoldChain = (
  colelction: EntitiesCollection,
  indicator: ShootIndicatorComponent
) => {
  //prettier-ignore
  return new ChainBuilder(colelction)
    .withSystem(AnimateGunkOnHold, {indicatorValue: indicator.value})
  .build()
};
