import { ReactElement, useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Tools,
  Vector3,
  HemisphericLight,
  MeshBuilder,
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

      // This creates and positions a free camera (non-mesh)
      var camera = new ArcRotateCamera(
        "ArcRotateCamera",
        Tools.ToRadians(-270),
        Math.PI / 2,
        90,
        new Vector3(0, 0, 0),
        scene
      );

      // This targets the camera to scene origin
      camera.setTarget(Vector3.Zero());

      // This attaches the camera to the canvas
      camera.attachControl(renderCanvas.current, true);

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;

      // Our built-in 'sphere' shape.
      var sphere1 = MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2, segments: 32 },
        scene
      );
      var sphere2 = MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2, segments: 32 },
        scene
      );
      var sphere3 = MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2, segments: 32 },
        scene
      );

      // Move the sphere upward 1/2 its height
      sphere1.position.x = -2;
      sphere1.position.y = 1;

      sphere2.position.x = 0;
      sphere2.position.y = 1;

      sphere3.position.x = 2;
      sphere3.position.y = 1;

      // Our built-in 'ground' shape.
      var ground = MeshBuilder.CreateGround(
        "ground",
        { width: 6, height: 4 },
        scene
      );

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
