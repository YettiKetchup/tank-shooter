import { Sprite } from 'pixijs';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { AssetKey, ProjectileType } from '@shared/data';
import { ButtonIconView } from './button-icon.view';
import { ShootButtonLabelView } from './shoot-button-label.view';
import { getProjectileData } from '@shared/utils';

import {
  AmmoCountComponent,
  ShootButtonComponent,
} from '@modules/shoot-ui-module/components';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  ChangableDisabledAlpha,
  CursorTypeComponent,
} from '@shared/modules';

export const ShootButtonView = (
  collection: EntitiesCollection,
  type: ProjectileType
) => {
  const config = getProjectileData(type);
  const icon = `bullet_red_${type}.png`;

  const buttonComponent = new ButtonComponent(
    AssetKey.Button,
    AssetKey.ButtonHovered,
    AssetKey.ButtonPressed,
    AssetKey.ButtonDisabled
  );

  const components = [
    buttonComponent,
    new ButtonShiftedClick(0, 2),
    new CursorTypeComponent('pointer'),
    new ButtonHoldableComponent(),
    new ShootButtonComponent(config.type, config.chargingSpeed),
    new AmmoCountComponent(config.count),
    new ChangableDisabledAlpha(),
  ];

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
      .withComponents(components)
    .withChildren()
      .withNode(ButtonIconView(icon))
      .withNode(ShootButtonLabelView(`${config.count}x`))
    .endChildren()
  .build();
};
