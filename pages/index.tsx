import type { ReactElement } from "react";
import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { P } from "../components-base/P";

export default function Page() {
  return (
    <div>
      <H level={2}>
        안녕하세요, <br />
        <br />
        안정적이고 편한 서비스를 만들기위해 노력하는 프론트엔드 개발자
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

      {/* <P>요기에 깃헙, 연락처 등 걸 예정</P> */}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
