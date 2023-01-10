import { useState } from "react";
import CountDownTimer from "./components/CountDownTimer";
import "./App.css";

const ONE_MIN_IN_MS = 60 * 1000;

function App(props) {
  const startDate = new Date().getTime();
  const timeInOneHour = startDate + ONE_MIN_IN_MS;
  const [targetDate, setTargetDate] = useState(new Date(timeInOneHour));

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setTargetDate(new Date(e.target.value));
    } else {
      setTargetDate(new Date(timeInOneHour));
    }
  };

  return (
    <div className="countdown-container">
      <form>
        <label htmlFor="countdown-date-time">Set target date:</label>
        <input
          id="countdown-date-time"
          name="countdown-date-time"
          type="datetime-local"
          onChange={handleChange}
        />
      </form>
      <CountDownTimer targetDate={targetDate} startDate={startDate} />
    </div>
  );
}

export default App;
