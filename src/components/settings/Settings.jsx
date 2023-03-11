import { useContext, useEffect } from "react"
import { SettingsContext } from "../Root"
export default function Settings() {
    const settings = useContext(SettingsContext)
    return (
        <div className="center">
            <div className="card" id="settings">
            <div className="head"><h1>Settings</h1></div>
            <div className="content">
            <div className="row">
                <h2>Dark Theme</h2>
                {
                    settings.isDarkTheme?
                    <button onClick={settings.toggleTheme}>disable</button>:
                    <button onClick={settings.toggleTheme}>enable</button>
                }
        </div>
            <div className="row">
                <h2>Sound</h2>
                {
                    settings.enableSound?
                    <button onClick={settings.toggleSound}>disable</button>:
                    <button onClick={settings.toggleSound}>enable</button>
                }
            </div>
            </div>
        </div>
        </div>
    )
}
