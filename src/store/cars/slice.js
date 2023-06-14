import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    value: [],
    carListFiltered: [],
    search: {
      brand : "",
      model : "",
    }
  },
  reducers: {
    setCars: (state, action) => {
      state.value = action.payload.toLowerCase();
    },
    removeCar: (state, action) => {
      state.value = state.value.filter((car) => car.id != action.payload);
    },
    setSearchBrand: (state, action) => {
      state.search.model = action.payload.toLowerCase();
      state.carListFiltered = state.value
      .filter((car)=> car.brand.toLowerCase().includes(state.search.brand))
      .filter(((car)=> car.brand.toLowerCase().includes(state.search.model)))
    },
  },
});

export const { setCars, removeCar,setSearchBrand } = carsSlice.actions;

export default carsSlice.reducer;
