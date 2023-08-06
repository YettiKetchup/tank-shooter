import { AmmoConfig } from '@modules/tank-module/data/ammo.config';
import { EntitiesCollection, ViewBuilder } from 'mysh-pixi';
import { ShootButtonView } from './shoot-button.view';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@shared/resize-module';

export const ShootButtonsFactory = (
  builder: ViewBuilder<any>,
  collection: EntitiesCollection
) => {
  const buttons = AmmoConfig.map((ammo) => {
    return ShootButtonView(collection, ammo.type);
  });

  const gap = { x: 45, y: 45 };
  const { length } = buttons;

  buttons.forEach((button, index) => {
    const { width, height } = button.getBounds();
    const areaWidth = length * width + gap.x;
    const areaHeight = length * height + gap.y;

    let x = (width + gap.x / 2) * index;
    let y = (height + gap.y / 2) * index;
    x -= areaWidth / 2 - width / 2;
    y -= areaHeight / 2 - height / 2;

    builder
      .withNode(button)
      .asEntity(collection)
      .withComponent(new PositionLandscapeComponent(0, y))
      .withComponent(new PositionPortraitComponent(x, 0));
  });
};