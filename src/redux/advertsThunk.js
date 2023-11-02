import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "services/api";

export const getAdvertsThunk = createAsyncThunk(
  "adverts/getAdvertsThunk",
  async (_, thunkApi) => {
    try {
      const response = await getAdverts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
