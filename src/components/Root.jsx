import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Root() {
  return (
    <>
    <Header/>
    <div id="outlet">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
