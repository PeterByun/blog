type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
};

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { size = "sm" } = props;

  const className = `img-size-${size}`;

  return (
    <img
      src="/assets/icons/loading-spinner.svg"
      alt="loading-spinner"
      width="150"
      className={className}
    />
  );
};
