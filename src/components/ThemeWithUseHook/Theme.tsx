import { createContext, useState } from "react";
import { ReactNode } from "react";
import Card from "./Card";

export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const Theme = () => {
    return (
        <ThemeProvider>
            <Card />
        </ThemeProvider>
    );
};

export default Theme;