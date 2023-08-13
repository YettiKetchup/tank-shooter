import { Module, RegisterSystems } from 'mysh-pixi';
import { UpdateHealthbarSystem } from './systems';

@RegisterSystems([{ provide: UpdateHealthbarSystem }])
export class HealthbarModule extends Module {}
