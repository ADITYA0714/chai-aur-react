import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
            console.log(data);
            // .then return a callback function to clean up the effect
    },[currency])
    console.log(data);
    return data;
}

// Using an async function inside useEffect to fetch currency data and  
// update the state with the fetched data.  
// The effect runs whenever the 'currency' dependency changes.
/*
useEffect(() => {
    const fetchCurrencyData = async () => {
        try {
            const response = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
            );

            const result = await response.json();

            setData(result[currency]);
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
    };

    fetchCurrencyData();
}, [currency]);

return data;
*/

export default useCurrencyInfo;