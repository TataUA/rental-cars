import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts, selectError, selectIsLoading } from "redux/selectors";
import { getAdvertsThunk } from "redux/advertsThunk";
import { Loader } from "components/Loader/Loader";
import { ItemCar } from "components/ItemCar/ItemCar";
import { List } from "./ListCars.styled";

export const ListCars = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAdverts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <List>
        {items.map((item) => (
          <ItemCar key={item.id} item={item} />
        ))}
      </List>
      {error && <p>Sorry, something went wrong...</p>}
    </>
  );
};
