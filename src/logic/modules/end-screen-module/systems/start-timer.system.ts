import { Text } from 'pixijs';
import { Entity, Filtered, System, Includes, StageController } from 'mysh-pixi';
import { TimerComponent } from '../components';
import { GameStage } from '@stages/game-stage';

@Includes(Text, TimerComponent)
export class StartTimerSystem extends System {
  protected async onExecute(entities: Filtered<Entity>): Promise<void> {
    await entities.parallel(async (entity) => {
      const text = entity.get(Text);
      let { seconds } = entity.get(TimerComponent);
      text.text = seconds;
      await this.runTimer(text, seconds);
    });
  }

  private runTimer(text: Text, seconds: number): Promise<void> {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        seconds -= 1;
        text.text = seconds;

        if (seconds <= 0) {
          clearInterval(intervalId);
          resolve();
          StageController.load(GameStage);
        }
      }, 1000);
    });
  }
}
