import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import './TopRanks.css'
export default function TopRanks() {
    const app = useContext(AppContext)
    const getSortedUserByTopRanks=()=>{
        return app.users.sort((a,b)=>{
            return b.topRank-a.topRank
        }).slice(0,3)
    }
    return (
        <div className="top-ranks card">
            <div className="head">
            <h1>Top 3 Ranks</h1>
            </div>
            <div className="ranks">
                {
                    getSortedUserByTopRanks().map((u,i) => {
                        return <Link key={i} className={`rank ${u.id===app.user.id?'current':''}`}  to={'/account/'+u.id}>
                                <div className="img" style={{ backgroundImage: `url(${u.level.img})` }}></div>
                                <div className="info">
                                    <span className="speed">{u.name}~<span>{u.topRank}</span>WPM</span>
                                    <span className="mail">{u.email}</span>
                                </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
