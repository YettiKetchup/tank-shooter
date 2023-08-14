import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { StorageKey } from '@shared/data';
import { TankAPI } from '@shared/api/tanks';
import { ShootButtonView } from './views/shoot-button.view';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@features/resize';

export const ShootButtonsFactory = (builder: ViewBuilder<any>) => {
  const { projectiles } = TankAPI.get('player');
  const collection = EntityStorage.get(StorageKey.UI);
  const length = projectiles.length;
  const gap = { x: 45, y: 45 };

  const buttons = projectiles.map(({ type, count }) =>
    ShootButtonView(type, count)
  );

  buttons.forEach((button, index) => {
    const { width, height } = buttons[0].getBounds();
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
