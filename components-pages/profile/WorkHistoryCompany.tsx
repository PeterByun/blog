import { H } from "../../components-base/H";
import { CompanyDescription } from "./WorkHistoryCompanyDescription";

export const WorkHistoryCompany = ({
  name,
  companySiteUrl,
  description,
  duration,
  jobDescription,
}: {
  name: string;
  companySiteUrl: string;
  description: string;
  duration: string;
  jobDescription: React.ReactNode;
}) => {
  return (
    <>
      <H level={2}>
        <a href={companySiteUrl}> {name} </a>
      </H>
      <CompanyDescription title="회사소개" description={description} />
      <CompanyDescription title="재직기간" description={duration} />
      <CompanyDescription title="담당업무" description={jobDescription} />
    </>
  );
};
