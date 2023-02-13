import { useState, useEffect } from "react";

import { StyledWrapper } from "./style";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Wrapper = (props) => {
  const { height, width } = useWindowDimensions();
  const { widthNew, children, minHeight, ...rest } = props;

  return (
    <StyledWrapper
      {...rest}
      minHeight={minHeight}
      currentWidth={width}
      widthNew={widthNew}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
