import { Container } from 'pixijs';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { ButtonView, ShootButtonLabelView } from '@views/ui';
import { AmmoConfig } from '@modules/tank-module/data/ammo.config';

import {
  AmmoData,
  ProjectileType,
  TankColor,
} from '@modules/tank-module/data/types';

import {
  AmmoCountComponent,
  AmmoDamageComponent,
  ShootButtonComponent,
} from '@modules/tank-module/components';

export const ShootButtonView = (
  collection: EntitiesCollection,
  type: ProjectileType,
  color: TankColor = 'red'
) => {
  const config = AmmoConfig.find((config) => config.type === type) as AmmoData;
  const icon = `bullet_${color}_${type}.png`;

  const components = [
    new ShootButtonComponent(type, color),
    new AmmoCountComponent(config.count),
    new AmmoDamageComponent(config.damage),
  ];

  const buttonRef = ButtonView(collection, icon, components);
  const textRef = ShootButtonLabelView(`${config.count}x`);

  //prettier-ignore
  return new ViewBuilder(Container)
    .asEntity(collection)
    .withNode(buttonRef)
    .withNode(textRef)
      .withAnchor(0.5, 1)
      .withPositionY(-26)
  .build();
};
