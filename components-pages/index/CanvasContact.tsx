import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CustomLoadingScreen } from "../../babylon/custom-loading-screen";
import {
  Engine,
  SceneLoader,
  ArcRotateCamera,
  HemisphericLight,
  Tools,
  Vector3,
  Matrix,
  Color4,
  ActionManager,
  ExecuteCodeAction,
  Material,
} from "babylonjs";
import "babylonjs-loaders";

import LoadingSpinner from "../../assets/icons/loading-spinner.svg";

type EmmissiveColor = {
  r: number;
  g: number;
  b: number;
};

type CanvasContactProps = {
  className: string;
};

const CanvasContact = (props: CanvasContactProps) => {
  const handleContactClick = (contactType: string) => {
    const contactLink = window.document.createElement("a");

    if (contactType === "phone") {
      contactLink.href = "tel:+8201095369050";
    } else {
      contactLink.href = "mailto: peter1035k@gmail.com";
    }

    contactLink.click();
  };

  const [showBabylonLoadingScreen, setShowBabylonLoadingScreen] =
    useState<boolean>(true);

  const handleSetBabylonLoadingScreen = useCallback(
    (e: CustomEvent<boolean>) => {
      setShowBabylonLoadingScreen(e.detail);
    },
    [showBabylonLoadingScreen]
  );

  useEffect(() => {
    window.addEventListener(
      "showBabylonLoadingScreen",
      handleSetBabylonLoadingScreen as EventListener
    );
    window.addEventListener(
      "hideBabylonLoadingScreen",
      handleSetBabylonLoadingScreen as EventListener
    );

    return () => {
      window.removeEventListener(
        "showBabylonLoadingScreen",
        handleSetBabylonLoadingScreen as EventListener
      );
      window.removeEventListener(
        "hideBabylonLoadingScreen",
        handleSetBabylonLoadingScreen as EventListener
      );
    };
  }, []);

  const renderCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!renderCanvas.current) return;

    const engine = new Engine(renderCanvas.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    engine.loadingScreen = new CustomLoadingScreen();

    SceneLoader.Load("../models/", "phone.glb", engine, function (scene) {
      // Camera
      const camera = new ArcRotateCamera(
        "ArcRotateCamera",
        Tools.ToRadians(-100),
        Math.PI / 2,
        55,
        new Vector3(0, 0, 0),
        scene
      );
      camera.setTarget(Vector3.Zero());
      camera.attachControl(renderCanvas.current, true);

      // Load lights
      const light = new HemisphericLight("light", new Vector3(9, 10, 0), scene);
      light.intensity = 3;

      // Load environment
      scene.clearColor = new Color4(0.11, 0.11, 0.11, 1);

      scene.createDefaultEnvironment({
        createGround: false,
        createSkybox: false,
      });

      scene.onPointerDown = () => {
        const ray = scene.createPickingRay(
          scene.pointerX,
          scene.pointerY,
          Matrix.Identity(),
          camera
        );
        const hit = scene.pickWithRay(ray);

        if (hit?.pickedMesh && hit.pickedMesh.name) {
          handleContactClick(hit.pickedMesh.name);
        }
      };

      // Load models
      SceneLoader.AppendAsync("../models/", "mail.glb", scene).then(
        (sceneAfterMailLoaded) => {
          const actionManager = new ActionManager(sceneAfterMailLoaded);

          actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, function (
              e
            ) {
              const material = e.meshUnderPointer?.material as Material & {
                emissiveColor: EmmissiveColor;
              };
              if (material) {
                material.emissiveColor.r = 0.4;
                material.emissiveColor.g = 0.4;
                material.emissiveColor.b = 0.4;
              }
            })
          );
          // Remove highlight of the mesh when the mouse leaves the model
          actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPointerOutTrigger, function (
              e
            ) {
              const material = e.meshUnderPointer?.material as Material & {
                emissiveColor: EmmissiveColor;
              };
              if (material) {
                material.emissiveColor.r = 0;
                material.emissiveColor.g = 0;
                material.emissiveColor.b = 0;
              }
            })
          );

          sceneAfterMailLoaded.meshes.forEach((mesh) => {
            if (mesh.name === "Mail") {
              mesh.actionManager = actionManager;
              mesh.position = new Vector3(-18, 0, 0);
            } else if (mesh.name === "phone") {
              mesh.actionManager = actionManager;
              mesh.position = new Vector3(18, -5, 0);
            }
          });
        }
      );

      // Render
      engine.runRenderLoop(function () {
        scene.render();
      });
      window.addEventListener("resize", function () {
        engine.resize();
      });
    });
  }, []);

  const classNameProp = props.className ? props.className : "";
  const wrapperClassName = `canvas-contact ${classNameProp}`;

  const loadingScreenClassName = `loading-screen ${
    !showBabylonLoadingScreen ? "hidden" : ""
  }`;
  const canvasClassName = `${showBabylonLoadingScreen ? "hidden" : ""}`;

  return (
    <div className={wrapperClassName}>
      <canvas
        className={canvasClassName}
        ref={renderCanvas}
        width="500px"
      ></canvas>

      <div className={loadingScreenClassName}>
        <Image alt="loading-spinner" src={LoadingSpinner} />
      </div>
    </div>
  );
};

export default CanvasContact;
