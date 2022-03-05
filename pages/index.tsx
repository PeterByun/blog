import { ReactElement, useEffect, useRef } from "react";
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

import { CustomLoadingScreen } from "../babylon/custom-loading-screen";

import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { P } from "../components-base/P";
import { Container } from "../components-base/Container";

type EmmissiveColor = {
  r: number;
  g: number;
  b: number;
};

const handleContactClick = (contactType: string) => {
  const contactLink = window.document.createElement("a");

  if (contactType === "phone") {
    contactLink.href = "tel:+8201095369050";
  } else {
    contactLink.href = "mailto: peter1035k@gmail.com";
  }

  contactLink.click();
};

export default function Page() {
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
        Tools.ToRadians(-90),
        Math.PI / 2,
        44,
        new Vector3(0, 0, 0),
        scene
      );
      camera.setTarget(Vector3.Zero());
      camera.attachControl(renderCanvas.current, true);

      // Light
      const light = new HemisphericLight("light", new Vector3(8, 12, 0), scene);
      light.intensity = 1;

      // Environment
      scene.clearColor = new Color4(0, 0, 0, 0);
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
          //if hover is over remove highlight of the mesh
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

      engine.runRenderLoop(function () {
        scene.render();
      });

      window.addEventListener("resize", function () {
        engine.resize();
      });
    });
  }, []);

  return (
    <section className="index-root">
      <H level={2}>
        안녕하세요, <br />
        <br />
        안정적이고 편리한 서비스를 만들기위해 노력하는 개발자
        <br />
        <br />
        변동혁 입니다.
      </H>
      <br />

      <Container className="container-2 margin-bottom-1">
        <H level={2}>연락처</H>

        <P>
          전화번호: <a href="tel:+8201095369050"> 01095369050</a>
        </P>
        <P>
          이메일:
          <a href="mailto: peter1035k@gmail.com"> peter1035k@gmail.com</a>
        </P>
        <P>
          Github:
          <a href="https://github.com/PeterByun">
            {" "}
            https://github.com/PeterByun
          </a>
        </P>
      </Container>

      <canvas ref={renderCanvas} width="500px"></canvas>
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
