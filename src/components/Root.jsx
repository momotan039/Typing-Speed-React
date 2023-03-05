import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { playWrongSound } from "./Utils/Sounds.mjs";

export const SettingsContext = createContext();
export default function Root() {
  const [enableSound, setEnableSound] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <SettingsContext.Provider
      value={{
        enableSound: enableSound,
        isDarkTheme: isDarkTheme,
        toggleSound: () => setEnableSound(!enableSound),
        toggleTheme: () => setIsDarkTheme(!isDarkTheme),
      }}
    >
      <div className={`root ${isDarkTheme ? "dark" : ""}`}>
        <div className="container">
          <Header />
          <div id="outlet">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </SettingsContext.Provider>
  );
}
