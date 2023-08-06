import { Text, TextStyle } from 'pixijs';

export const ShootButtonLabelView = (label: string) => {
  const style = new TextStyle({
    fill: '#ffffff',
    strokeThickness: 2,
    fontFamily: 'Glowing Bubble',
  });

  const text = new Text(label, style);
  return text;
};