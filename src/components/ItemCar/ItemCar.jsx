import { useEffect, useState } from "react";
import {
  ItemWrapper,
  Image,
  HeartBtn,
  Description,
  ItemTitle,
  Model,
  Year,
  Price,
  TagsWrapper,
  WrapperUp,
  WrapperDown,
  Tag,
  Button,
} from "./ItemCar.styled";
import logo from "images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteItems } from "redux/selectors";
import { addFavoriteItems, deleteFavoriteItems } from "redux/advertsSlice";

export const ItemCar = ({ item }) => {
  const {
    //id,
    year,
    make,
    model,
    type,
    img,
    photoLink,
    // description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    // address,
    // rentalConditions,
    mileage,
  } = item;

  const [firstRender, setFirstRender] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems);

  function handleToggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      if (favoriteItems.some((favoriteItem) => favoriteItem.id === item.id)) {
        setIsFavorite(true);
      }
      return;
    }

    if (isFavorite) {
      if (!favoriteItems.some((favoriteItem) => favoriteItem.id === item.id)) {
        dispatch(addFavoriteItems(item));
      }
    } else {
      if (favoriteItems.some((favoriteItem) => favoriteItem.id === item.id)) {
        dispatch(deleteFavoriteItems(item.id));
      }
    }
  }, [firstRender, isFavorite, dispatch, favoriteItems, item]);

  return (
    <ItemWrapper>
      {img || photoLink ? (
        <Image src={logo} alt="car" width={274} height={268}></Image>
      ) : (
        <Image src={logo} alt="car" width={274} height={268}></Image>
      )}

      <HeartBtn onClick={handleToggleFavorite}>
        {isFavorite ||
        favoriteItems.some((favoriteItem) => favoriteItem.id === item.id) ? (
          <svg className="heart_full" viewBox="0 0 1024 1024">
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
          </svg>
        ) : (
          <svg className="heart_outline" viewBox="0 0 1024 1024">
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
          </svg>
        )}
      </HeartBtn>
      <Description>
        <ItemTitle>
          {make} &nbsp;<Model>{model}</Model>
          <Year>, {year}</Year>
          <Price>{rentalPrice}</Price>
        </ItemTitle>
        <TagsWrapper>
          <WrapperUp>
            <Tag>Kiev</Tag>
            <Tag>Ukraine</Tag>
            <Tag>{rentalCompany}</Tag>
          </WrapperUp>
          <WrapperDown>
            <Tag>{type}</Tag>
            <Tag className="tag_make">{make}</Tag>
            <Tag>{mileage.toLocaleString("en-US")}</Tag>
            <Tag className="tag_functionalities">{functionalities[0]}</Tag>
          </WrapperDown>
        </TagsWrapper>
      </Description>
      <Button>Learn more</Button>
    </ItemWrapper>
  );
};
