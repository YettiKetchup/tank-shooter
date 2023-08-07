import { StorageKey } from '@shared/data';
import { BarView } from '@views/ui';
import { ViewBuilder, EntityStorage } from 'mysh-pixi';

import {
  IndicatorFillSpeed,
  ShootIndicatorComponent,
} from '@modules/tank-module/components';

export const ShootPowerIndicator = () => {
  const collection = EntityStorage.get(StorageKey.UI);
  const shootIndicatorComponent = new ShootIndicatorComponent(
    0xd21404,
    0xed7117,
    0x74b72e
  );

  //prettier-ignore
  return new ViewBuilder(BarView())
    .asEntity(collection)
      .withComponent(shootIndicatorComponent)
      .withComponent(new IndicatorFillSpeed(0.01))
    .withAlpha(0)
    .withAngle(90)
    .withPosition(50, 195)
  .build();
};
