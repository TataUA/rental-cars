import styled from "@emotion/styled";

export const ItemWrapper = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border: none;
  box-shadow: 8px 8px 10px var(--text-color-fifty);
`;

export const Image = styled.img`
  margin-bottom: 14px;
  object-fit: cover;
  background-color: var(--text-color);
  border-radius: 14px;
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 2px;
  background-color: transparent;
  border: none;
  .heart_outline {
    fill: var(--white);
    height: 18px;
    width: 18px;
    &:hover,
    :focus {
      fill: var(--blue-active);
      transition: var(--transition);
    }
  }
  .heart_full {
    fill: var(--blue);
    height: 18px;
    width: 18px;
  }
`;

export const Description = styled.div`
  padding: 0 8px;
  margin-bottom: 28px;
`;

export const ItemTitle = styled.h3`
  display: flex;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-color);
`;

export const TitleWrapper = styled.div`
  max-width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Model = styled.span`
  color: var(--blue);
`;

export const Year = styled.span`
  margin-right: auto;
`;

export const Price = styled.span`
  margin-left: auto;
  max-width: 50px;
`;
export const TagsWrapper = styled.div``;
export const WrapperUp = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
  gap: 6px;

  .tag_company {
    width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const WrapperDown = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  .tag_make,
  .tag_functionalities {
    width: 130px;
    height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-right: none;
  }
  .tag_make {
    width: 80px;
  }
    .tag_mileage {
    &:nth-of-type(3) {
      border-left: 1px solid var(--border-color-ten);
      padding-left: 4px;
    }
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

export const Button = styled.button`
  width: 100%;
  height: 44px;
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
