import { useEffect, useState } from "react";
import { deleteCar, getCars } from "../service/carsService";
import { useDispatch, useSelector } from "react-redux";
import { setCars, removeCar } from "../store/cars/slice";
import selectCarsValue from "../store/cars/selector";
import CarRow from "./CarRow";

const AppCars = () => {
  const dispatch = useDispatch();
  let cars = useSelector(selectCarsValue);

  useEffect(() => {
    getCars().then(({ data }) => dispatch(setCars(data.data)));
  }, []);

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

  return (
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
        {cars.map((car, index) => (
          <CarRow car={car} index={index} isAutomatic={isAutomatic} deleteCar={deleteCar}></CarRow>
        ))}
      </tbody>
    </table>
  );
};

export default AppCars;
