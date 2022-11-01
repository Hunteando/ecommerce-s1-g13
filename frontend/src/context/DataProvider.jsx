import React, { useState, useEffect , createContext } from "react";
import { data } from './../Data';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const producto = data
        setProductos(producto)

    }, [])

    const value = {
        productos : [productos]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
};