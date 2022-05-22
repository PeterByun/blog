import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../types/component-types";

import Layout from "../components/Layout";
import { Introduction } from "../components-pages/profile/Introduction";
import { Contact } from "../components-pages/profile/Contact";
import { WorkHistory } from "../components-pages/profile/WorkHistory";
import { Skills } from "../components-pages/profile/Skills";

const Profile: NextPageWithLayout = () => {
  const CanvasContact = dynamic(
    () => import("../components-pages/index/CanvasContact"),
    {
      ssr: false,
      loading: () => {
        return <div className="canvas-contact-loading"></div>;
      },
    }
  );

  return (
    <section className="profile-root">
      <Introduction />

      <br />

      <CanvasContact className="margin-bottom-1" />

      <Contact />

      <hr />

      <WorkHistory />

      <hr />

      <Skills />
    </section>
  );
};

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile;
