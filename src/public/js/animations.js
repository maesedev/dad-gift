LottieInteractivity.create({
  mode: 'scroll',
  player: '#father-scroll',
  actions: [
      {
        visibility:[0,.9],
        type: 'seek',
        frames: [0, 90],
      },
    ],
});


LottieInteractivity.create({
    mode: 'scroll',
    player: '#load',
    actions: [
        {
          visibility:[-.3,.4],
          type: 'seek',
          frames: [0, 30],
        },
      ],
  });