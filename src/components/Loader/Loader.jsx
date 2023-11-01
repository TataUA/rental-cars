import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Oval
      height={60}
      width={60}
      color="var(--blue-active)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="var(--blue-active)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
