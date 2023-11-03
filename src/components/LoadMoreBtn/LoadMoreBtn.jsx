import { useDispatch, useSelector } from "react-redux";
import { setPage } from "redux/advertsSlice";
import { selectIsLoadMoreBtn, selectPage } from "redux/selectors";
import { LoadMore } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoadMoreBtn = useSelector(selectIsLoadMoreBtn);

  const onLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));
  };

  return (
    <>
      {isLoadMoreBtn && (
        <LoadMore type="button" onClick={onLoadMore}>
          Load more
        </LoadMore>
      )}
    </>
  );
};
