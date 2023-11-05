import styled from "@emotion/styled";

export const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  display: flex;
  object-fit: cover;
  margin-bottom: 14px;
  background-color: var(--text-color);
  border-radius: 14px;
`;

export const DescriptionWrapper = styled.div`
  padding: 0 8px;
  margin-bottom: 24px;
`;

export const ItemTitle = styled.h3`
  display: flex;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-color);
`;

export const Model = styled.span`
  color: var(--blue);
`;

export const Year = styled.span`
  margin-right: auto;
`;

export const WrapperUp = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 4px;

  .tag_type {
    border: 0;
  }
`;

export const WrapperDown = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 14px;

  .tag_engineSize {
    border: 0;
  }
`;

export const Tag = styled.p`
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--text-color-fifty);
  padding-right: 6px;
  border-right: 1px solid var(--border-color-ten);
`;

export const Button = styled.a`
display: block;
box-sizing:border-box;
text-align: center;
  width: 168px;
  height: 44px;
  padding: 12px 30px;
  margin-top: 10px;
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

export const Description = styled.p`
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const DetailsTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
export const Accessories = styled.ul`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;
`;

export const AccessoriesItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--text-color-fifty);
  padding-right: 6px;
  border-right: 1px solid var(--border-color-ten);
  &:last-of-type {
    border-right: 0;
  }
`;

export const Functionalities = styled.ul`
  display: flex;
  margin-bottom: 24px;
  gap: 6px;
`;

export const FunctionalitiesItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--text-color-fifty);
  padding-right: 6px;
  border-right: 1px solid var(--border-color-ten);
  &:last-of-type {
    border-right: 0;
  }
`;

export const Condition = styled.p`
  padding: 7px 14px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 35px;
  background-color: var(--modal-text-background);
  color: var(--modal-text-color);

  > span {
    font-weight: 500;
    color: var(--blue);
  }
`;
