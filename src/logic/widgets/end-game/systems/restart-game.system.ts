import { Text } from '@pixi/text';
import { EndScreenComponent, TimerComponent } from '../components';
import { Filtered, System, Includes, OnChanges, WatchFor } from 'mysh-pixi';

@OnChanges(WatchFor.Enabled, EndScreenComponent)
@Includes(Text, TimerComponent)
export class RestartGameSystem extends System {
  protected async onExecute(entities: Filtered): Promise<void> {
    await entities.parallel(async (entity) => {
      const text = entity.get(Text);
      let { seconds } = entity.get(TimerComponent);
      text.text = seconds;
      await this.runTimer(text, seconds);

      /**
       * I really wanted to reload the scene, but at the last moment
       * it turned out that my StageController was a little broken.
       * Therefore, so. Sori :)
       */
      location.reload();
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
        }
      }, 1000);
    });
  }
}
