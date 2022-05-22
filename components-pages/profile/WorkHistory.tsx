import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";
import { WorkHistoryCompany } from "./WorkHistoryCompany";

export const WorkHistory = () => {
  return (
    <>
      <H level={1}>경력</H>

      <Container className="container-2 margin-bottom-1">
        <WorkHistoryCompany
          name="코웨이"
          companySiteUrl="https://www.coway.com/"
          description="13년간 국내 업계 1위를 지켜왔고, 현재는 글로벌 시장에서 급속도로
      성장중인 환경가전 업체."
          duration="2021.04 ~ 현재"
          jobDescription={
            <>
              코웨이의 디지털 전환을 목표로 하는 DX센터에서 프론트엔드
              개발자로써 아래의 업무 수행.
              <ol>
                <li>
                  <strong>
                    통합회원 시스템의 프론트엔드를 구축하고 유지보수/운영/개선.
                  </strong>
                </li>
                <li>
                  <strong>실시간 코디매칭 서비스 고도화(내재화).</strong>
                </li>
              </ol>
            </>
          }
        />
      </Container>

      <Container className="container-2 margin-bottom-1">
        <WorkHistoryCompany
          name="디토닉"
          companySiteUrl="https://www.dtonic.io/home-kr"
          description="시공간 빅데이터 처리엔진 Geo-Hiker, ESL(Electronic Shelf Labeling System)을 판매하는 빅데이터 스타트업."
          duration="2020.06 ~ 2021.03 (총 10개월)"
          jobDescription={
            <>
              개발본부의 프론트엔드 개발자로써{" "}
              <a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9E%90%EC%8B%9D_%EB%A7%A4%EB%8C%80_%ED%91%9C%EC%8B%9C%EA%B8%B0">
                ESL
              </a>
              공급사인 <a href="https://solu-m.com/">SoluM</a>의{" "}
              <strong>
                ESL관리 프로그램(
                <a href="https://solumesl.com/en/solution/aims">AIMS</a>)의
                프론트엔드를 개발.
              </strong>
              <br />
              AIMS는 Sephora, Macy's, Xiaomi 등의 대형 유통업체에 납품되어
              서비스 중.
            </>
          }
        />
      </Container>

      <Container className="container-2 margin-bottom-1">
        <WorkHistoryCompany
          name="NeuroTacker(인턴십)"
          companySiteUrl="https://www.neurotrackerx.com/"
          description="운동선수들의 인지능력을 향상시키는 게임(훈련)을 개발하는 몬트리올의 게임회사."
          duration="2018.08 ~ 2018.12(총 3개월)"
          jobDescription={"신제품 프로토타입 개발을 위한 연구보조 업무를 수행."}
        />
      </Container>
    </>
  );
};
