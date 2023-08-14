import { ViewBuilder, EntityStorage } from 'mysh-pixi';
import { StorageKey, ViewName } from '@shared/data';
import { BarView } from '@entities/ui/bar';
import { PowerbarComponent } from '../components';

export const ShootPowerIndicator = () => {
  const collection = EntityStorage.get(StorageKey.UI);
  const shootIndicatorComponent = new PowerbarComponent(
    0xd21404,
    0xed7117,
    0x74b72e
  );

  return new ViewBuilder(BarView(0, ViewName.PowerbarValue))
    .asEntity(collection)
    .withComponent(shootIndicatorComponent)
    .withAlpha(0)
    .withAngle(90)
    .withPosition(75, 320)
    .build();
};
