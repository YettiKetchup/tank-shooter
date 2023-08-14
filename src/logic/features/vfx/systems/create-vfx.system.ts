import { Filtered, OnEvent, System } from 'mysh-pixi';
import { CreateParticleData } from '../data/types';
import { CreateParticleEvent } from '../events';
import { VFXMapper } from '../utils';

@OnEvent(CreateParticleEvent)
export class CreateVfxSystem extends System {
  protected onExecute(filtered: Filtered, data: CreateParticleData): void {
    const vfxFactory = VFXMapper.get(data.collection, data.view);
    if (!vfxFactory) return;

    const vfx = vfxFactory();
    vfx.position = data.position;
    data.parent.addChild(vfx);
  }
}
