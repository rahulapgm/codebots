
import document from "next/document";
import { createContext, ReactElement, useEffect, useState } from "react";
import { useLocalStorage } from '@codebots/hooks-and-hoc';

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {/* handle theme toggle */},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export const GlobalThemeProvider = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    useEffect(() => initialThemeHandler());


    const initialThemeHandler = () => {
        console.log("")
    }

    const [value, setValue] = useLocalStorage("isDarkTheme", "")
    // function isLocalStorageEmpty(): boolean {
    //     return !localStorage.getItem("isDarkTheme");
    //   }
    
    //   function initialThemeHandler(): void {
    //     if (isLocalStorageEmpty()) {
    //       localStorage.setItem("isDarkTheme", `true`);
    //       document!.querySelector("body")!.classList.add("dark");
    //       setIsDarkTheme(true);
    //     } else {
    //       const isDarkTheme: boolean = JSON.parse(
    //         localStorage.getItem("isDarkTheme")!
    //       );
    //       isDarkTheme && document!.querySelector("body")!.classList.add("dark");
    //       setIsDarkTheme(() => {
    //         return isDarkTheme;
    //       });
    //     }
    //   }
    
}
