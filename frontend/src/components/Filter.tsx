import type { Car } from "../models/carModel"

function Filter(car: Car, onChange: Function) {
  

    return (
    <>
    <p className="filter--title">Filter By:</p>
    <div className="filter--wrap">
        <div className="filter--item">
            
        </div>
    </div>
    </>
  )
}

export default Filter