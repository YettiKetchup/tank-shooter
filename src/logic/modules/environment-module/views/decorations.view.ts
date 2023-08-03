import {
  BarrelTopView,
  BarrelView,
  OilView,
  SandbagBrokenView,
  SandbagView,
  TracksView,
} from '@views/environment';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const DecorationsView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TracksView(-30, 370))
      .withAngle(45)
    .withNode(TracksView(30, -370))
      .withAngle(45)
    .withNode(OilView(555, -35))
    .withNode(BarrelView(575, -55))
      .withAngle(45)
    .withNode(BarrelTopView(-125, -235))
    .withNode(BarrelTopView(-125, -280))
    .withNode(BarrelTopView(-125, -280))
    .withNode(BarrelTopView(-125, -255))
    .withNode(SandbagView(-550, -50))
    .withNode(SandbagView(-600, -100))
    .withNode(SandbagView(-575, -80))
    .withNode(SandbagBrokenView(-635, -10))
      .withAngle(-40)
  .build();
};
