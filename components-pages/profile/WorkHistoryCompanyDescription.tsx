export const CompanyDescription = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="history-description">
      <strong>{title}</strong> <br />
      {description}
    </div>
  );
};
