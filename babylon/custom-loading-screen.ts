import { ILoadingScreen } from "babylonjs";

export class CustomLoadingScreen implements ILoadingScreen {
  loadingUIBackgroundColor = "black";
  loadingUIText = "Loading";

  displayLoadingUI() {}

  hideLoadingUI() {}
}
