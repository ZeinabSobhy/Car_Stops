import React, { useState , useEffect } from 'react';
import {getCarsDetails} from "../api/carsDetails";

const CarContext = React.createContext([{}, () => {}]);

const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
useEffect(()=> {
    getCarsDetails().then(res =>  {
        setCars(res?.data?.MakeModels)
    }, err =>  {
        console.log("Error")
    })
},[])
    return (
        <CarContext.Provider value={[cars, setCars]}>{children}</CarContext.Provider>
    );
};

export { CarsProvider, CarContext };
