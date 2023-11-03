import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectPage,
} from "redux/selectors";
import { getAdvertsThunk } from "redux/advertsThunk";
import { setPage } from "redux/advertsSlice";
import { Loader } from "components/Loader/Loader";
import { ListCars } from "../components/ListCars/ListCars";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";

const Catalog = () => {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const items = useSelector(selectAdverts);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      dispatch(setPage(1));
      return;
    }
    dispatch(getAdvertsThunk());
  }, [firstRender, dispatch, page]);

  return (
    <>
      {loading && <Loader />}
      <ListCars items={items} />
      {error && <p>Sorry, something went wrong...</p>}
      <LoadMoreBtn />
    </>
  );
};

export default Catalog;
