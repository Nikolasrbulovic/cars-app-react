import { useEffect, useState } from "react";
import { deleteCar, getCars } from "../service/carsService";
import { useDispatch, useSelector } from "react-redux";
import {
  setCars,
  removeCar,
  setSelectedCars,
  removeSelectedCar,
  setLastPage,
} from "../store/cars/slice";
import {
  selectCurrentPage,
  selectLastPage,
  selectedCars,
  selectCars,
  selectSearchModel,
  selectSearchBrand,
} from "../store/cars/selector";
import CarRow from "./CarRow";

const AppCars = () => {
  const dispatch = useDispatch();
  let cars = useSelector(selectCars);
  let model = useSelector(selectSearchModel);
  let brand = useSelector(selectSearchBrand);
  let currentPage = useSelector(selectCurrentPage);
  let lastPage = useSelector(selectLastPage);

  useEffect(() => {
    getCars({
      page: currentPage,
      brand: brand,
      model: model,
    }).then(({ data }) => {
      dispatch(setCars(data.data));
      dispatch(setLastPage(data.last_page));
    });
  }, [model, brand, currentPage]);

  const isAutomatic = (automatic) => {
    if (automatic) {
      return "Yes";
    }
    return "No";
  };

  const deleteCar = (id) => {
    deleteCar(id);
    dispatch(removeCar(id));
  };
  const handleClickSort = (sort_by, sort_order) => {
    getCars({
      sort_by,
      sort_order,
      brand: brand,
      model: model,
    }).then(({ data }) => {
      dispatch(setCars(data.data));
      dispatch(setLastPage(data.last_page));
    });
  };

  return (
    <>
      <div>
        <button onClick={() => handleClickSort("brand", "asc")}>
          Brand Asc
        </button>
        <button onClick={() => handleClickSort("brand", "desc")}>
          Brand Desc
        </button>
        <button onClick={() => handleClickSort("max_speed", "asc")}>
          Max speed Asc
        </button>
        <button onClick={() => handleClickSort("max_speed", "desc")}>
          Max speed Desc
        </button>
      </div>
      <table className="table container mt-5">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Max Speed</th>
            <th>Automatic</th>
            <th>Engine</th>
            <th>Number of Doors</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars && cars.length ? (
            cars?.map((car, index) => (
              <CarRow
                car={car}
                index={index}
                isAutomatic={isAutomatic}
              ></CarRow>
            ))
          ) : (
            <div>Nema automobila koji podlezu kriterijumu</div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AppCars;
