import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    carList: [],
    selectedCars: [],
    search: {
      brand: "",
      model: "",
    },
    currentPage: 1,
    lastPage: 1,
  },
  reducers: {
    setCars: (state, action) => {
      state.carList = action.payload;
    },
    removeCar: (state, action) => {
      state.carList = state.carList.filter((car) => car.id !== action.payload);
    },
    setSearchBrand: (state, action) => {
      state.search.brand = action.payload;
    },
    setSearchModel: (state, action) => {
      state.search.model = action.payload;
    },
    setSelectedCars: (state, action) => {
      state.selectedCars.push(action.payload);
    },
    removeSelectedCar: (state, action) => {
      state.selectedCars = state.selectedCars.filter(
        (e) => e.id !== action.payload
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
  },
});

export const {
  setCars,
  removeCar,
  setSearchBrand,
  setSearchModel,
  setFilteredCarsList,
  setSelectedCars,
  removeSelectedCar,
  setCurrentPage,
  setLastPage,
} = carsSlice.actions;

export default carsSlice.reducer;
