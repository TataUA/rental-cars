import styled from "@emotion/styled";
import bg_auto from "../../images/bg_auto.jpg"

export const Wrapper = styled.div`
height: 700px;
  background-image: url(${bg_auto});
`;

export const Title = styled.h1`
display: flex;
margin: 20px 0;
    font-weight: 600;
    font-size: 58px;
    justify-content: center;
    align-items: center;
`
export const Span = styled.span`
    color: var(--blue-active);
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 24px;
`