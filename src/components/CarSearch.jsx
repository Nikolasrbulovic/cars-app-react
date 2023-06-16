import selectCarsValue from "../store/cars/selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCars, setSearchBrand, setSearchModel } from "../store/cars/slice";
const CarsSearch = () => {
  const dispatch = useDispatch();

  const handleSearchBrand = (e) => {
    dispatch(setSearchBrand(e.target.value));
  };
  const handleSearchModel = (e) => {
    dispatch(setSearchModel(e.target.value));
  };

  return (
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
      <div className="d-flex flex-row mr-2">
        <span>Model: </span>
        <input
          type="search"
          class="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleSearchModel}
        />
        <span>Brand: </span>
        <input
          type="search"
          class="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
          onChange={handleSearchBrand}
        />
      </div>
    </form>
  );
};

export default CarsSearch;
