import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "counter/fetchData",
  async (value) => {
    console.log(value);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, data: [], posts: [], status: "" },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.status = "good";
      state.data = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
