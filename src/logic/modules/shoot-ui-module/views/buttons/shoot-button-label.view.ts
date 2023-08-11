import { Text, TextStyle } from '@pixi/text';

export const ShootButtonLabelView = (label: string) => {
  const style = new TextStyle({
    fill: '#ffffff',
    strokeThickness: 2,
    fontFamily: 'Glowing Bubble',
  });

  const text = new Text(label, style);
  text.anchor.set(0.5, 1);
  text.position.y = -25;

  return text;
};
