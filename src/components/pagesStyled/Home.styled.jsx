import styled from "@emotion/styled";
import bg_auto from "images/bg_auto.jpg";

export const Wrapper = styled.section`
  height: 700px;
  background-image: url(${bg_auto});
  margin-top: 108px;
  padding: 50px 0;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 58px;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  color: var(--blue-active);
`;

export const Text = styled.p`
  margin-left: auto;
  margin-top: 500px;
  max-width: 800px;
  font-weight: 500;
  font-size: 24px;
`;
