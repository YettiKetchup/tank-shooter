import { BarricadeView, FenceView } from '@views/environment';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const BarricadesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    // Player barricade
    .withNode(FenceView(0, 175))
    .withNode(BarricadeView(100, 175))
    .withNode(BarricadeView(-100, 175, 2))
    .withNode(FenceView(185, 200))
      .withAngle(45)
    .withNode(FenceView(-185, 200))
      .withAngle(-45)

    //Enemy Barricade
    .withNode(BarricadeView(0, -175, 2))
    .withNode(BarricadeView(70, -175))
    .withNode(BarricadeView(-70, -175))
    .withNode(FenceView(165, -200))
      .withAngle(-45)
  .build()
};
