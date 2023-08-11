import { EntityStorage, ViewBuilder } from 'mysh-pixi';
import { StorageKey, projectileConfig } from '@shared/data';
import { ShootButtonView } from '@views/ui';

import {
  PositionLandscapeComponent,
  PositionPortraitComponent,
} from '@features/resize';

export const ShootButtonsFactory = (builder: ViewBuilder<any>) => {
  const collection = EntityStorage.get(StorageKey.UI);

  const buttons = projectileConfig.map((ammo) => {
    return ShootButtonView(ammo.type);
  });

  const gap = { x: 45, y: 45 };
  const length = buttons.length;

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
