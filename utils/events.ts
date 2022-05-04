export const EventShowBabylonLoadingScreen = new CustomEvent<boolean>(
  "showBabylonLoadingScreen",
  {
    detail: true,
  }
);

export const EventHideBabylonLoadingScreen = new CustomEvent<boolean>(
  "hideBabylonLoadingScreen",
  {
    detail: false,
  }
);
