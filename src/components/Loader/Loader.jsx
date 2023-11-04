import { Oval } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
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
    </LoaderWrapper>
  );
};
