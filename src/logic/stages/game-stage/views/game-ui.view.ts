import { ShootButtonsView } from '@modules/tank-module/views/ui';
import { StorageKey } from '@shared/data';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const GameUIView = () => {
  const collection = EntityStorage.get(StorageKey.UI);

  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(ShootButtonsView(collection))
  .build();
};
