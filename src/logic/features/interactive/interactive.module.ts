import { Module, RegisterSystems } from 'mysh-pixi';
import {
  ButtonClickShift,
  DisableButtonSystem,
  DisabledChildrenAlpha,
  EnableButtonSystem,
  EnableChildrenAlpha,
  HoldPointerSystem,
  SetButtonSystem,
  SetCursorSystem,
} from './systems';

@RegisterSystems([
  { provide: ButtonClickShift },
  { provide: DisableButtonSystem },
  { provide: DisabledChildrenAlpha },
  { provide: EnableButtonSystem },
  { provide: HoldPointerSystem },
  { provide: SetButtonSystem },
  { provide: SetCursorSystem },
  { provide: EnableChildrenAlpha },
])
export class InteractiveModule extends Module {}
