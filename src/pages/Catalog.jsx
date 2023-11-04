import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFilteredAdverts,
  selectIsLoading,
  selectPage,
} from "redux/selectors";
import { getAdvertsThunk } from "redux/advertsThunk";
import { setPage, setQuery } from "redux/advertsSlice";
import { Loader } from "components/Loader/Loader";
import { ListCars } from "../components/ListCars/ListCars";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Wrapper } from "components/pagesStyled/Catalog.styled";

const Catalog = () => {
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const filteredItems = useSelector(selectFilteredAdverts);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      dispatch(setPage(1));
      dispatch(setQuery({ make: "" }));
      return;
    }
    dispatch(getAdvertsThunk());
  }, [firstRender, dispatch, page]);

  return (
    <Wrapper>
      {loading && <Loader />}
      <Dropdown />
      <ListCars items={filteredItems} />
      {error && <p>Sorry, something went wrong...</p>}
      <LoadMoreBtn />
    </Wrapper>
  );
};

export default Catalog;
