export const selectCars = (state) => state.cars.carList;

export const selectSearchModel = (state) => state.cars.search.model;
export const selectSearchBrand = (state) => state.cars.search.brand;
export const selectedCars = (state) => state.cars.selectedCars;
export const selectCurrentPage = (state) => state.currentPage;
export const selectLastPage = (state) => state.lastPage;
