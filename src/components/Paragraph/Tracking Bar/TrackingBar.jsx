import './TrackingBar.css'
export default function TrackingBar({ correctwords,speed,acc,time }) {
  return (
    <div id="tracking-bar">
      <div className="time">
        <h3>Time:{time}</h3>
      </div>
      <div className="speed">
      <h3>Speed:{isNaN(speed)?0:speed}WPM</h3>
      </div>
      <div className="acc">
      <h3>Accuracy:{acc}%</h3>
      </div>
      <div className="correct words">
        <h3>Correct Words:{correctwords}</h3>
      </div>
    </div>
  );
}
