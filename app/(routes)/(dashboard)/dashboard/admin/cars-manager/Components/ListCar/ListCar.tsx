
import {ListCarsProps} from "./ListCar.types";
import {CardAutos} from "./CardAutos";

export function ListCar(props: ListCarsProps ) {    
    const {autos }=props;
  return(
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
        {
            autos.map((autos)=>(
                <CardAutos autos={autos} key={autos.model}  />
             ))
        }

    </div>  
    );
}
