import { Sprite } from 'pixijs';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { AmmoConfig } from '@modules/tank-module/data/ammo.config';
import { AssetKey } from '@shared/data';
import { ButtonIconView } from './button-icon.view';
import { ShootButtonLabelView } from './shoot-button-label.view';
import { AmmoCountComponent } from '@modules/tank-module/components';
import { ProjectileType, TankColor } from '@modules/tank-module/data/types';
import { getAmmoData } from '@modules/tank-module/utils';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  ChangableDisabledAlpha,
  CursorTypeComponent,
} from '@shared/modules';

export const ShootButtonView = (
  collection: EntitiesCollection,
  type: ProjectileType,
  color: TankColor = 'red'
) => {
  const config = getAmmoData(type);
  const icon = `bullet_${color}_${type}.png`;

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
