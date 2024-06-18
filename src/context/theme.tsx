import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Ttheme = "light" | "dark";

type ThemeContextType = {
  theme: Ttheme;
  darkMode: () => void;
  lightMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Ttheme>("light");

  useEffect(() => {
    document?.querySelector("html")?.setAttribute("class", theme);
  }, [theme]);

  const darkMode = () => {
    setTheme("dark");
  };
  const lightMode = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, lightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
