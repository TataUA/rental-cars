import { useSelector } from "react-redux";
import { selectFavoriteItems } from "redux/selectors";
import { Wrapper } from "components/pagesStyled/Favorite.styled";

import { ListCars } from "../components/ListCars/ListCars";

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems);

  return (
    <Wrapper>
      <ListCars items={favoriteItems} />
    </Wrapper>
  );
};

export default Favorites;
