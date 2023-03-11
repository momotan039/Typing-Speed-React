import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../App";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { putUser } from "./Utils/Crud.mjs";
import { saveUserToSorage } from "./Utils/LocalStorage.mjs";
import { playWrongSound } from "./Utils/Sounds.mjs";

export const SettingsContext = createContext();
export default function Root() {
  const app=useContext(AppContext)
  const user=app.user
  const getSoundMode=()=>{
    if(user)
    return user.settings.enableSound
    return true
  }
  const getThemeMode=()=>{
    debugger
    if(user)
    return user.settings.isDarkTheme
    return true
  }

  const [enableSound, setEnableSound] = useState(getSoundMode());
  const [isDarkTheme, setIsDarkTheme] = useState(getThemeMode());

  return (
    <SettingsContext.Provider
      value={{
        enableSound: enableSound,
        isDarkTheme: isDarkTheme,
        toggleSound: ()=>{
          // {enableSound: true, isDarkTheme: true}
          setEnableSound(!enableSound)
          const val=!enableSound
          user.settings.enableSound=val
          putUser(user.id,user).then((u)=>saveUserToSorage(u))
        },
        toggleTheme:()=>{
          setIsDarkTheme(!isDarkTheme)
          const val=!isDarkTheme
          user.settings.isDarkTheme=val
          putUser(user.id,user).then((u)=>saveUserToSorage(u))
        },
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
