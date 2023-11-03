import { useSelector } from "react-redux";
import { selectFavoriteItems } from "redux/selectors";

import { ListCars } from "../components/ListCars/ListCars";

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems);

  return (
    <>
      <ListCars items={favoriteItems} />
    </>
  );
};

export default Favorites;
