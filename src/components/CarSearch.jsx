import selectCarsValue from "../store/cars/selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCars, setSearchBrand } from "../store/cars/slice";
const CarsSearch = () =>{
    const dispatch = useDispatch();
 const cars = useSelector(selectCarsValue);
 const onChangeHandler = (e) =>{
    dispatch(setSearchBrand);
 }
 useEffect(()=>{
    dispatch(setCars(cars))
 },[])
 
    return (    
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" onChange={(e)=>{onChangeHandler(e)}}>
    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"  />
    </form>
  )
}

export default CarsSearch;