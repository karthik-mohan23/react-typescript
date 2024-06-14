import { useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  const onCopy = () => {
    passwordRef?.current?.select();
    navigator.clipboard.writeText(passwordRef?.current?.value!);
  };

  useEffect(() => {
    const generatePassword = () => {
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let symbols = "[]<>?$#@%&!|";

      if (isNumbers) {
        letters += numbers;
      }

      if (isSymbols) {
        letters += symbols;
      }

      let newPassword = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        newPassword += letters[randomIndex];
      }
      setPassword(newPassword);
    };
    generatePassword();
  }, [length, isNumbers, isSymbols]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-400">
      <div>
        <div className="flex items-center gap-3">
          <label htmlFor="password"></label>
          <input
            title="password"
            type="text"
            id="password"
            value={password}
            ref={passwordRef}
          />
          <button className="bg-blue-500 px-2 py-1" onClick={onCopy}>
            Copy
          </button>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <input
              type="range"
              name=""
              id="length"
              min={8}
              max={16}
              step={1}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id="number"
              checked={isNumbers}
              onChange={(event) => setIsNumbers(event.target.checked)}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id="symbols"
              checked={isSymbols}
              onChange={(event) => setIsSymbols(event.target.checked)}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PasswordGenerator;
