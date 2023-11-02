import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk } from "./advertsThunk";

const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getAdvertsThunk.pending, (state) => {
        state.adverts.isLoading = true;
        state.adverts.error = null;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts.isLoading = false;
        state.adverts.items = payload;
      })
      .addCase(getAdvertsThunk.rejected, (state, { payload }) => {
        state.adverts.isLoading = false;
        state.adverts.error = payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
