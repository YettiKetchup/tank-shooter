import { Module, RegisterSystems } from 'mysh-pixi';
import { AddDecalSystem, DestroyDecalSystem } from './systems';

@RegisterSystems([{ provide: AddDecalSystem }, { provide: DestroyDecalSystem }])
export class DecalsModule extends Module {}
