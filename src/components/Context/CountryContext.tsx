'use client'
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext([])

export default function CountryContextWrapper(Props) {
    const [countries, setCountries] = useState([])

    async function getData () {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
    
        let sortedData = data.sort(function(a,b){
            let x = a.name.common.toLowerCase();
            let y = b.name.common.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        console.log({sortedData})
        setCountries(sortedData)
    }
    useEffect(()=>{
        getData()
    },[])
    console.log({countries})
    return(
        <CountryContext.Provider value={countries}>
            {Props.children}
        </CountryContext.Provider>
    )
}