import './TrackingBar.css'
export default function TrackingBar({ correctwords,speed,acc,sec }) {
  
  const getTime=()=>{
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minutes}:${remainingSeconds < 10 ?
              '0' + remainingSeconds :
               remainingSeconds}`
  }

  return (
    <div id="tracking-bar">
      <div className="time">
        <h3>Time:<span>{getTime()}</span></h3>
      </div>
      <div className="speed">
      <h3>Speed:<span>{isNaN(speed)?0:speed}</span>WPM</h3>
      </div>
      <div className="acc">
      <h3>Accuracy:<span>{acc}</span>%</h3>
      </div>
      <div className="correct words">
        <h3>Correct Words:<span>{correctwords}</span></h3>
      </div>
    </div>
  );
}
