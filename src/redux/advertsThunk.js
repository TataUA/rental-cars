import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "services/api";

export const getAdvertsThunk = createAsyncThunk(
  "adverts/getAdvertsThunk",
  async (_, { getState, thunkApi }) => {
    const state = getState();
    const page = state.adverts.page;

    try {
      const response = await getAdverts(page);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
