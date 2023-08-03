import { TreeView, TwigsView } from '@views/environment';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const TreesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TreeView(-380, 160))
    .withNode(TreeView(-290, 50, 'green', 'small'))
    .withNode(TreeView(330, 400))
    .withNode(TreeView(635, 300, 'green', 'small'))
    .withNode(TreeView(400, -145, 'brown'))
    .withNode(TreeView(-460, -200, 'brown', 'small'))
    .withNode(TreeView(-155, -465, 'brown'))
    .withNode(TreeView(185, -400, 'brown', 'small'))
    .withNode(TwigsView(305, 100))
    .withNode(TwigsView(-230, 425))
    .withNode(TwigsView(370, -455, 'brown'))
  .build();
};
