import { Module, RegisterSystems } from 'mysh-pixi';
import { DetectIntersectionSystem } from './systems';

@RegisterSystems([{ provide: DetectIntersectionSystem }])
export class IntersectionModule extends Module {}
