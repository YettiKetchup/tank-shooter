import { StorageKey, ViewName } from '@shared/data';
import { BarView } from '@entities/ui/bar';
import { Component, EntityStorage, ViewBuilder } from 'mysh-pixi';
import { HealthbarComponent } from '../components';
import { Container } from '@pixi/display';

export const HealthbarView = (
  attached: Container,
  ...components: Component[]
) => {
  const collection = EntityStorage.get(StorageKey.UI);

  return new ViewBuilder(BarView(1, ViewName.HealthbarValue, 0x74b72e))
    .withAngle(180)
    .asEntity(collection)
    .withComponents([new HealthbarComponent(attached), ...components])
    .build();
};
