import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px 60px;
  font-family: "Manrope", sans-serif;
  background-color: var(--white);
`;

export const Header = styled.header`
  position: fixed;
  max-width: 1200px;
  margin: 0 auto;
  top: 0;
  display: flex;
  width: 100%;
  padding: 15px 0;
  
  > nav {
    display: flex;
    width: 100%;
    gap: 25px;
    align-items: center;
    justify-content: right;
  }
`;

export const Link = styled(NavLink)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  font-size: 18px;

  &.active {
    color: var(--white);
    background-color: var(--blue);
    box-shadow: 5px 5px 2px var(--text-color-fifty);
    transition: var(--transition);
  }
`;

