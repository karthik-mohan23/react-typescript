import { useState } from "react";
import useCurrency from "../../hooks/useCurrency";

function CurrencyConverter() {
  const [input, setInput] = useState(1);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("eur");

  const data = useCurrency(from);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  const countriesArr = Object.keys(data);

  const calculateConversion = (toCountry: string) => {
    return input * data[toCountry];
  };

  const convertedData = calculateConversion(to);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <label htmlFor="from">Input</label>
        <input
          type="text"
          name=""
          id="from"
          title="from country"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          className="border border-gray-500"
        />
      </div>
      <div>
        <label htmlFor="from">From : {from}</label>
        <select
          title="from country"
          value={from}
          onChange={(e) => setFrom(e.target.value)}>
          {countriesArr.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="from">To : {to}</label>
        <select
          title="to country"
          value={to}
          onChange={(e) => setTo(e.target.value)}>
          {countriesArr.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <h1>Conversion : {convertedData}</h1>
    </section>
  );
}
export default CurrencyConverter;
