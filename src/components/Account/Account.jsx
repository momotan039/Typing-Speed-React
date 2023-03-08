import React, { useContext, useState } from 'react'
import { AppContext } from '../../App'
import MyChart from './MyChart'
import './Account.css'
import { levels } from '../Utils/User.mjs'
export default function Account() {
    const app = useContext(AppContext)
    const user = app.user
    const [showLevels, setShowLevels] = useState(false)
    return (
        <div className='account'>
            <div className="card">
                <div className="image">
                    <img src={user.level.img} />
                    <h2>Level:
                        <span className='level' onClick={() => setShowLevels(s => !s)}  >
                            {user.level.name}
                        </span></h2>
                </div>
                <div className="detials">
                    <h3>Name:{user.name}</h3>
                    <h3>Email:{user.email}</h3>
                    <h3>Avg Speed:{user.avgSpeed} WPM</h3>
                    <h3>Top Rank:{user.topRank} WPM</h3>
                </div>
            </div>
            <div className={`levels card ${showLevels ? 'show' : ''}`}>
                {
                    levels.map((l, i) => {
                        return <div key={i} className="row">
                            <div className="image">
                                <img src={l.img} />
                            </div>
                            <div className="data">
                                <h1>{l.name}</h1>
                                    {
                                        i===levels.length-1?<h2>speed: 80+ WPM</h2>
                                        :<h2>speed: {l.range.join('-')} WPM</h2>
                                    }
                                
                            </div>
                        </div>
                    })
                }
            </div>
            <MyChart user={app.user}/>
        </div>
    )
}
