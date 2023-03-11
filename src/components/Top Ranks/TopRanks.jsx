import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import './TopRanks.css'
export default function TopRanks() {
    const app = useContext(AppContext)
    const getSortedUserByTopRanks=()=>{
        return app.users.sort((a,b)=>{
            return b.topRank-a.topRank
        })
    }
    return (
        <div className="top-ranks card">
            <div className="head">
            <h1>Top Ranks</h1>
            </div>
            <div className="ranks">
                {
                    getSortedUserByTopRanks().map((u,i) => {
                        return <Link key={i} className='rank'  to={'/account/'+u.id}>
                                <div className="img" style={{ backgroundImage: `url(${u.level.img})` }}></div>
                                <div className="info">
                                    <span className="mail">{u.email}</span>
                                    <span className="name">{u.name}</span>
                                    <span className="speed">{u.topRank}WPM</span>
                                </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
