import { createContext, ReactElement, useEffect, useState } from "react";

const themeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});