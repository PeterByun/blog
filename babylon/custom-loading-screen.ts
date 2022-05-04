import { ILoadingScreen } from "babylonjs";
import {
  EventShowBabylonLoadingScreen,
  EventHideBabylonLoadingScreen,
} from "../utils/events";

export class CustomLoadingScreen implements ILoadingScreen {
  loadingUIBackgroundColor = "black";
  loadingUIText = "Loading";

  displayLoadingUI() {
    window.dispatchEvent(EventShowBabylonLoadingScreen);
  }
  hideLoadingUI() {
    window.dispatchEvent(EventHideBabylonLoadingScreen);
  }
}
