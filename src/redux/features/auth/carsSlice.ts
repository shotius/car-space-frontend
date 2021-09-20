import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carsService from "services/carsService";
import { CarsSliceState } from "./types";

const initialState: CarsSliceState = {
  cars: []
}

export const searchCars = createAsyncThunk("cars/searchCars", async () => {
  try {
    const result = await carsService.searchCars()
    return result
  } catch (error) {
    console.log('error while fetching', error)
  }
})

const carsSlice= createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchCars.fulfilled, (state, action) => {
      console.log(state, action)
    })
  }
})

export const {reducer: carsReducer} = carsSlice