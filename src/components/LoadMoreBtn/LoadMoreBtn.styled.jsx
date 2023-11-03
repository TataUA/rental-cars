import styled from "@emotion/styled";

export const LoadMore = styled.button`
  display: block;
  margin: 0 auto;
  width: 90px;
  height: 24px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--blue);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--blue);
  &:hover,
  :focus {
    color: var(--blue-active);
    transition: var(--transition);
  }
`;
