// define and export theme
"use client";
import React, { createContext, useContext, useEffect, useState }  from "react";

// define theme type
type Theme = {
  name: string;
  bg: string;
  text: string;
  navbar: string;
  subText: string;
  subHover: string;
  link: string;
  linkHover: string;
  iconColor: string;
  h2Color: string;
};

// themes supported by app
export const modes : Theme[] = [
  {
    name: "pink",
    bg: "bg-gradient-to-r from-pink-400 to-pink-500",
    text: "text-black",
    navbar: "black",
    subText: "black",
    subHover: "white",
    link: "#5A2A83",
    linkHover: "#8626a6",
    iconColor: "#472563",
    h2Color: "#b24ec1"
  },
{
  name: "blue",
  bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
  text: "text-black",
  navbar: "text-black",
  subText: "text-black",
  subHover: "white",
  link: "#00FFFF",
  linkHover: "#469999",
  iconColor: "#00FFFF",
  h2Color: "#39a8b3"
},
  {
    name: "sunset",
    bg: "bg-gradient-to-r from-amber-300 to-amber-500",
    text: "text-gray-900",
    subText: " text-black",
    navbar: "text-black",
    subHover: "white",
    link: "#568203",
    linkHover: "#6aeb2f",
    iconColor: "#3c7d10",
    h2Color: "#40b547"
  }
];

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(modes[0]); // default is dark mode

  // set specific things in global css so don't need to import theme each time
  useEffect(() => {
    // Update CSS variables based on the theme
    document.documentElement.style.setProperty('--background-color', theme.bg);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--sub-text-color', theme.subText);
    document.documentElement.style.setProperty('--hover-color', theme.subHover);
    document.documentElement.style.setProperty('--navbar-text-color', theme.navbar);
    document.documentElement.style.setProperty('--link-color', theme.link);
    document.documentElement.style.setProperty('--link-hover-color', theme.linkHover);
    document.documentElement.style.setProperty('--icon-color', theme.iconColor);
    document.documentElement.style.setProperty('--h2-color', theme.h2Color);

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
