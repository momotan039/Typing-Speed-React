import { useContext, useEffect } from "react"
import { SettingsContext } from "../Root"
import './Settings.css'
export default function Settings() {
    const settings = useContext(SettingsContext)
    return (
        <div id="settings">
            <h1>Settings</h1>
            <div className="panel">
            <div className="row">
                <h2>Theme</h2>
                {
                    settings.isDarkTheme?
                    <button onClick={settings.toggleTheme}>disabled</button>:
                    <button onClick={settings.toggleTheme}>enabled</button>
                }
            </div>
            <div className="row">
                <h2>Sound</h2>
                {
                    settings.enableSound?
                    <button onClick={settings.toggleSound}>disabled</button>:
                    <button onClick={settings.toggleSound}>enabled</button>
                }
            </div>
            </div>
        </div>
    )
}
