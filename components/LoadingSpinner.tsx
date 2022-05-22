type LoadingSpinnerProps = {
  width?: string;
};

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { width = "150px" } = props;
  return (
    <img
      src="/assets/icons/loading-spinner.svg"
      alt="loading-spinner"
      width="150"
      style={{
        width: `${width} !important`,
      }}
    />
  );
};
