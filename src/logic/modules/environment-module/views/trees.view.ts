import { TreeView, TwigsView } from '@views/environment';
import { ViewBuilder } from 'mysh-pixi';
import { Container } from 'pixijs';

export const TreesView = () => {
  //prettier-ignore
  return new ViewBuilder(Container)
    .withNode(TreeView(-380, 160))
    .withNode(TreeView(-290, 50, 'green', 'small'))
    .withNode(TreeView(390, 400, 'green',))
    .withNode(TreeView(635, 300, 'green', 'small'))
    .withNode(TreeView(400, -145, 'brown'))
    .withNode(TreeView(-460, -200, 'brown', 'small'))
    .withNode(TreeView(-155, -465, 'brown'))
    .withNode(TwigsView(200, 130))
    .withNode(TwigsView(-230, 425))
    .withNode(TwigsView(305, -395, 'brown'))
  .build();
};
