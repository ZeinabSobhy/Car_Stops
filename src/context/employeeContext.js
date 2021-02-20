import React, { useState , useEffect} from 'react';
import {getEmployeeData} from "../api/getEmployee";

const EmployeeContext = React.createContext([{}, () => {}]);

const EmployeeProvider = ({ children }) => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getEmployeeData().then(data =>  {
            setEmployee(data.data)
        },err => {
            console.log(err)
        })
    },[])
    return (
        <EmployeeContext.Provider value={[employee]}>{children}</EmployeeContext.Provider>
    );
};

export { EmployeeProvider, EmployeeContext };
