import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["rates"]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;