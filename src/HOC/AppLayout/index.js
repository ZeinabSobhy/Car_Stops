import React from 'react';
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";


const AppLayout = ({ children }) =>  {
    return (
 <>
     <Header/>
     {children}
     <Footer/>
     </>
    )
}


export default AppLayout;