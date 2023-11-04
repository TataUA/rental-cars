import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk } from "./advertsThunk";

const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
    query: { make: "", rentalPrice: "", mileageMin: "", mileageMax: "" },
    page: 1,
  },
  favoriteItems: [],
  currentItem: null,
  isLoadMoreBtn: false,
  activeModal: false,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  reducers: {
    setPage: (state, { payload }) => {
      state.adverts.page = payload;
    },
    setQuery: (state, { payload }) => {
      state.adverts.query = { ...state.adverts.query, ...payload };
    },
    setIsLoadMoreBtn: (state, { payload }) => {
      state.isLoadMoreBtn = payload;
    },
    setActiveModal: (state, { payload }) => {
      state.activeModal = payload;
    },
    setCurrentItem: (state, { payload }) => {
      state.currentItem = payload;
    },
    addFavoriteItems: (state, { payload }) => {
      state.favoriteItems.push(payload);
    },
    deleteFavoriteItems: (state, { payload }) => {
      const index = state.favoriteItems.findIndex(
        (item) => item.id === payload
      );
      state.favoriteItems.splice(index, 1);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAdvertsThunk.pending, (state) => {
        state.adverts.isLoading = true;
        state.adverts.error = null;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts.isLoading = false;
        if (state.adverts.page === 1) {
          state.adverts.items = payload;
          state.isLoadMoreBtn = true;
        } else {
          state.adverts.items = [...state.adverts.items, ...payload];
        }
        if (payload.length < 12 || payload.length === 0) {
          state.isLoadMoreBtn = false;
        }
      })
      .addCase(getAdvertsThunk.rejected, (state, { payload }) => {
        state.adverts.isLoading = false;
        state.adverts.error = payload;
      }),
});

export const {
  setPage,
  setQuery,
  setIsLoadMoreBtn,
  setActiveModal,
  setCurrentItem,
  addFavoriteItems,
  deleteFavoriteItems,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
