import { createContext, useEffect, useMemo, useState } from "react";

export const StoreContext = createContext();
const URL = "https://fakestoreapi.com/products?limit=5";
console.log()
export const StoreContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const fetchAPI = async() => {
        try{
            const data = await fetch(URL);
            const response = await data.json();
            console.log("response", response);
            setItems(response);
        }catch(e){
            console.log("Unable to fetch the API", e);
        }
    };

    useEffect(() => {
        fetchAPI();
    },[URL]);


    return(
        <StoreContext.Provider value={{items}}>
            {children}
        </StoreContext.Provider>
    )

}