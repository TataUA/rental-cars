import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = (state) => state.adverts.items;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;
export const selectPage = (state) => state.adverts.page;
export const selectQuery = (state) => state.adverts.query;
export const selectFavoriteItems = (state) => state.favoriteItems;
export const selectCurrentItem = (state) => state.currentItem;
export const selectIsLoadMoreBtn = (state) => state.isLoadMoreBtn;
export const selectActiveModal = (state) => state.activeModal;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectQuery],
  (items, query) => {
    return items.filter((item) =>
      item.make.toLowerCase().includes(query.make.toLowerCase())
    );
  }
);
