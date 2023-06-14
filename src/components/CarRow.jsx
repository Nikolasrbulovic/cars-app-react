import { Link } from "react-router-dom";

const CarRow = ({car, index, isAutomatic, deleteCar}) =>{
return (<tr key={index}>
    <td>{car.brand}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.maxSpeed}</td>
    <td>{isAutomatic(car.isAutomatic)}</td>
    <td>{car.engine}</td>
    <td>{car.numberOfDoors}</td>
    <td>
      <Link className="btn btn-primary" to={`/edit/${car.id}`}>
        Select
      </Link>
    </td>
    <td>
      <button
        className="btn btn-primary"
        onClick={() => deleteCar(car.id)}
      >
        -
      </button>
    </td>
  </tr>)
}
export default CarRow;