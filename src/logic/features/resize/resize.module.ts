import { Module, RegisterSystems } from 'mysh-pixi';
import {
  ARPositionSystem,
  ARScaleSystem,
  AbsolutePositionSystem,
  AnchorSystem,
  PivotSystem,
  SmartFitSystem,
} from './systems';

@RegisterSystems([
  { provide: AbsolutePositionSystem },
  { provide: AnchorSystem },
  { provide: ARPositionSystem },
  { provide: ARScaleSystem },
  { provide: PivotSystem },
  { provide: SmartFitSystem },
])
export class ResizeModule extends Module {}
