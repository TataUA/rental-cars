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
    let filtered = items.filter((item) =>
      item.make.toLowerCase().includes(query.make.toLowerCase())
    );

    if (query.rentalPrice === 0) {
      return;
    }
    let filteredByPrice = filtered.filter((item) =>
      !query.rentalPrice
        ? item.rentalPrice
        : Number(item.rentalPrice.substring(1)) <= Number(query.rentalPrice)
    );

    if (query.mileageMin === 0 && query.mileageMax === 0) {
      return;
    }

    return filteredByPrice.filter(
      (item) =>
        item.mileage >= Number(query.mileageMin) &&
        (!query.mileageMax
          ? item.mileage
          : item.mileage <= Number(query.mileageMax))
    );
  }
);
