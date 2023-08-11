export const manifest = {
  bundles: [
    {
      name: 'game_screen',
      assets: [
        {
          name: 'tank_spritesheet',
          srcs: '/assets/sprites/tank/tank.json',
        },
        {
          name: 'ground_spritesheet',
          srcs: '/assets/sprites/ground/ground.json',
        },
        {
          name: 'environment_spritesheet',
          srcs: '/assets/sprites/environment/environment.json',
        },
        {
          name: 'ui_spritesheet',
          srcs: '/assets/sprites/ui/ui.json',
        },
        {
          name: 'Bubbles',
          srcs: './assets/fonts/glowing-bubble/glowing-bubble.ttf',
        },
        {
          name: 'explosion_cloud.png',
          srcs: '/assets/textures/explosion-fx/explosion_cloud.png',
        },
        {
          name: 'cracks_decal.png',
          srcs: '/assets/textures/cracks/cracks_decal.png',
        },
      ],
    },
  ],
};
