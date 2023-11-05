import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 860px;
  height: 80px;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-color-gray);

  .input-make {
    width: 224px;
  }

  .input-price {
    width: 125px;
  }

  .input-mileageMin {
    width: 160px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid var(--border-color-ten);
  }

  .input-mileageMax {
    width: 160px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export const Input = styled.input`
  display: block;
  height: 38px;
  margin: 8px 0 0;
  border-radius: 14px;
  border: none;
  padding: 4px 8px;
  background-color: var(--input-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-color);

  &.input-make::placeholder {
    color: var(--text-color);
  }
`;

export const ListMakes = styled.ul`
  display: block;
  position: absolute;
  z-index: 3;
  width: 200px;
  height: 272px;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: var(--white);
  top: 78px;
  left: 0;
  border-top: 1px solid var(--border-color-five);
  box-shadow: 0px 4px 36px 0px var(--border-color-five);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  scrollbar-width: thin;
  overflow-y: auto;
  overscroll-behavior: auto;
  cursor: pointer;
  transition: opacity 0.3s;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border-color-ten);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--text-color-twenty);
  }

  .make_item {
    margin-bottom: 8px;
    &:hover {
      color: var(--text-color);
    }
  }

  &.makes_visible {
    opacity: 1;
  }

  &.makes_hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const ItemMake = styled.li`
  &.active_item {
    color: var(--text-color);
  }
`;

export const MileageWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 44px;
  margin-top: 26px;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: var(--blue);
  color: var(--white);
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  :focus {
    background-color: var(--blue-active);
    transition: var(--transition);
  }
`;
