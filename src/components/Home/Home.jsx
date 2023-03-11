import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Paragraph } from "../Paragraph/Paragraph";
import Spinner from "../Spinner/Spinner";
import TopRanks from "../Top Ranks/TopRanks";
import { putUser } from "../Utils/Crud.mjs";
import { saveUserToSorage } from "../Utils/LocalStorage.mjs";
import './Home.css'
export default function Home() {
  const [paragraphKey, setParagraphKey] = useState(0)
  const app = useContext(AppContext)
  const [showSpinner, setShowSpinner] = useState(false);
  const user = app.user

  const playAgain = () => {
    setShowSpinner(true)
    putUser(user.id, user).then((u) => {
      saveUserToSorage(u)
      setParagraphKey(k => k + 1)
      setShowSpinner(false)
    })
  }

  return (
   <div className="center">
     <div className="home">
      {
        showSpinner ? <Spinner /> : (
        <>
          <Paragraph playAgain={playAgain} key={paragraphKey} />
          <TopRanks />
        </>)
      }
    </div>
   </div>
  )
}
