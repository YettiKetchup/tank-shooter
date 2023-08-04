import { StorageKey } from '@shared/data';
import { ButtonView, ShootButtonLabelView } from '@views/ui';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { Container, Text } from 'pixijs';

export const ShootButtonView = (icon: string) => {
  const collection = EntityStorage.get(StorageKey.UI);

  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(ButtonView(collection, icon))
    .withNode(ShootButtonLabelView('20x'))
      .withAnchor(0.5, 1)
      .withPositionY(-26)
  .build();
};
