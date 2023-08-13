import { Sprite } from '@pixi/sprite';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { ButtonIconView } from './button-icon.view';
import { ButtonLabelView } from './button-label.view';
import { AssetKey, StorageKey, ViewName } from '@shared/data';
import { ProjectileAPI, ProjectileType } from '@shared/api/projectiles';
import { AmmoCountComponent, ShootButtonComponent } from '../components';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  ChangableDisabledAlpha,
  CursorTypeComponent,
} from '@features/interactive';

export const ShootButtonView = (type: ProjectileType, count: number) => {
  const collection = EntityStorage.get(StorageKey.UI);
  const config = ProjectileAPI.get(type);
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
    new AmmoCountComponent(config.type, count),
    new ChangableDisabledAlpha(),
  ];

  return new ViewBuilder(Sprite)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
    .withComponents(components)
    .withChildren()

    .withNode(ButtonIconView(icon))
    .withNode(ButtonLabelView(`${count}x`), ViewName.ButtonAmmoCounter)

    .endChildren()
    .build();
};
