import { Module, RegisterSystems } from 'mysh-pixi';
import {
  CreateVfxSystem,
  DestroyDecalSystem,
  UpdateParticlesSystem,
} from './systems';

@RegisterSystems([
  { provide: CreateVfxSystem },
  { provide: UpdateParticlesSystem },
  { provide: DestroyDecalSystem },
])
export class VFXModule extends Module {}
