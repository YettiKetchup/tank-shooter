import { Module, RegisterSystems } from 'mysh-pixi';
import { GenerateTilesSystem } from './systems/';

@RegisterSystems([{ provide: GenerateTilesSystem }])
export class TilesGeneratorModule extends Module {}
