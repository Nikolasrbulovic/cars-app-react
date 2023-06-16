import { useState } from "react";
import { selectedCars } from "../store/cars/selector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSelectedCars, removeSelectedCar } from "../store/cars/slice";

const CarRow = ({ car, index, isAutomatic }) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  let selectedCarsTemp = useSelector(selectedCars);

  useEffect(() => {
    if (selectedCarsTemp.find((e) => e.id === car.id)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedCarsTemp, setIsSelected, car]);

  const selectCarHandler = (car) => {
    console.log(car);
    if (isSelected) {
      dispatch(removeSelectedCar(car.id));
    } else {
      dispatch(setSelectedCars(car));
    }
  };
  return (
    <tr key={index}>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.max_speed}</td>
      <td>{isAutomatic(car.isAutomatic)}</td>
      <td>{car.engine}</td>
      <td>{car.numberOfDoors}</td>

      <td>
        <button
          className="btn btn-primary"
          onClick={() => selectCarHandler(car)}
        >
          {isSelected ? "Deselect" : "Select"}
        </button>
      </td>
    </tr>
  );
};
export default CarRow;
