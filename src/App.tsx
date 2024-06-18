import Card from "./components/themeSwitch/Card";
import ThemeBtn from "./components/themeSwitch/ThemeBtn";
import { ThemeContextProvider } from "./context/theme";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="max-w-lg pt-60">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeContextProvider>
  );
}
