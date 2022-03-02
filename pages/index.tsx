import { ReactElement, useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Tools,
  Vector3,
  HemisphericLight,
  Mesh,
  StandardMaterial,
} from "babylonjs";

import Layout from "../components/Layout";

import { H } from "../components-base/H";

export default function Page() {
  const renderCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!renderCanvas.current) return;

    var engine = new Engine(renderCanvas.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    var createScene = function () {
      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new Scene(engine);
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

      // This creates and positions a free camera (non-mesh)
      var camera = new ArcRotateCamera(
        "ArcRotateCamera",
        Tools.ToRadians(-270),
        Math.PI / 3,
        5.5,
        new Vector3(0, 0, 0),
        scene
      );

      // This targets the camera to scene origin
      camera.setTarget(Vector3.Zero());

      // This attaches the camera to the canvas
      camera.attachControl(renderCanvas.current, true);

      var light = new HemisphericLight("light", new Vector3(0, 10, 0), scene);

      light.intensity = 0.7;

      var coin1 = Mesh.CreateCylinder("sphere", 0.5, 2, 2, 32, 1, scene);
      var coin2 = Mesh.CreateCylinder("sphere", 0.5, 2, 2, 32, 1, scene);
      var coin3 = Mesh.CreateCylinder("sphere", 0.5, 2, 2, 32, 1, scene);

      coin1.position.x = 2.5;
      coin1.position.y = 0;
      coin1.rotatePOV(1.1, 0, 0);
      var coinMatirial = new StandardMaterial("CoinMatirial", scene);
      coinMatirial.alpha = 1;
      coinMatirial.diffuseColor = new BABYLON.Color3(1, 1.52, 1);
      coin1.material = coinMatirial;

      coin2.position.x = 0;
      coin2.position.y = 0;
      coin2.rotatePOV(1.1, 0, 0);
      var coin2Matirial = new StandardMaterial("CoinMatirial", scene);
      coin2Matirial.alpha = 1;
      coin2Matirial.diffuseColor = new BABYLON.Color3(1.52, 1, 1);
      coin2.material = coin2Matirial;

      coin3.position.x = -2.5;
      coin3.position.y = 0;
      coin3.rotatePOV(1.1, 0, 0);
      var coin3Matirial = new StandardMaterial("CoinMatirial", scene);
      coin3Matirial.alpha = 1;
      coin3Matirial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
      coin3.material = coin3Matirial;

      return scene;
    };

    // call the createScene function
    var scene = createScene();
    // run the render loop
    engine.runRenderLoop(function () {
      scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }, []);

  return (
    <div>
      <H level={2}>
        안녕하세요, <br />
        <br />
        안정적이고 편리한 서비스를 만들기위해 노력하는 프론트엔드 개발자
        <br />
        <br />
      </H>
      <div>
        <H level={1} className="inline">
          변동혁
        </H>
        &nbsp;
        <H level={2} className="inline">
          입니다.
        </H>
      </div>

      <canvas ref={renderCanvas}> </canvas>
      {/* TODO: WebGL활용하여 전화번호, 이메일, 깃헙 등 링크 설정   */}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
