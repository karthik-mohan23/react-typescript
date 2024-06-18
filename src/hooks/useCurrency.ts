import { useState, useEffect } from "react";

function useCurrency(currency: string) {
  const [currencyData, setCurrencyData] = useState();

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrencyData(data[currency]))
      .catch((err) => console.log(err));
  }, [currency]);

  return currencyData;
}
export default useCurrency;
