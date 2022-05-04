type LoadingSpinnerProps = {
  width?: string;
};
export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { width = "150" } = props;
  return (
    <img src="/icons/loading-spinner.svg" alt="loading-spinner" width={width} />
  );
};
