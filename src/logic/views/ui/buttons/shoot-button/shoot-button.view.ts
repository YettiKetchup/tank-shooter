import { Sprite } from '@pixi/sprite';
import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { ButtonIconView } from './button-icon.view';
import { ButtonLabelView } from './button-label.view';
import { AmmoCountComponent, ShootButtonComponent } from './components';

import {
  AssetKey,
  ProjectileType,
  StorageKey,
  getProjectileData,
} from '@shared/data';

import {
  ButtonComponent,
  ButtonHoldableComponent,
  ButtonShiftedClick,
  ChangableDisabledAlpha,
  CursorTypeComponent,
} from '@features/interactive';

export const ShootButtonView = (type: ProjectileType) => {
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

  const collection = EntityStorage.get(StorageKey.UI);

  //prettier-ignore
  return new ViewBuilder(Sprite)
    .withAnchor(0.5, 0.5)
    .asEntity(collection)
      .withComponents(components)
    .withChildren()
      .withNode(ButtonIconView(icon))
      .withNode(ButtonLabelView(`${config.count}x`))
    .endChildren()
  .build();
};
