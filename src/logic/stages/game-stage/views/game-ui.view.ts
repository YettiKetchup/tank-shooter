import { StorageKey } from '@shared/data';
import { ButtonView } from '@views/ui';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const GameUIView = () => {
  const collection = EntityStorage.get(StorageKey.UI);
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(ButtonView(collection))
  .build();
};
