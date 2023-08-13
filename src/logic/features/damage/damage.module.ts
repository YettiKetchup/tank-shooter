import { Module, RegisterSystems } from 'mysh-pixi';
import { SetDamageSystem } from './systems';

@RegisterSystems([{ provide: SetDamageSystem }])
export class DamageModule extends Module {}
