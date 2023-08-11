import { StorageKey } from '@shared/data';
import { BarView } from '@views/ui';
import { Component, EntityStorage, ViewBuilder } from 'mysh-pixi';
import { HealthbarComponent } from '../components';

export const HealthbarView = (...components: Component[]) => {
  const collection = EntityStorage.get(StorageKey.Game);

  //prettier-ignore
  return new ViewBuilder(BarView(1, 0x74b72e))
    .withAngle(180)
    .asEntity(collection)
      .withComponents([new HealthbarComponent(), ...components])
  .build();
};
