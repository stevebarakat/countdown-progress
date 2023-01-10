import DateTimeDisplay from "./DateTimeDisplay";
import useCountDown from "../hooks/useCountDown";

const ExpiredNotice = () => {
  return (
    <div className="expired">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds, percentage }) => {
  return (
    <div className="show-counter">
      <div className="counter">
        <DateTimeDisplay type="Days" value={days} />
        <p>:</p>
        <DateTimeDisplay type="Hours" value={hours} />
        <p>:</p>
        <DateTimeDisplay type="Mins" value={minutes} />
        <p>:</p>
        <DateTimeDisplay type="Seconds" value={seconds} />
      </div>
      <div className="progress-wrap">
        <label for="file">Progress:</label>
        <progress id="file" max="100" className="progress" value={percentage} />
      </div>
    </div>
  );
};

const CountDownTimer = ({ targetDate, startDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  let now = new Date().getTime();
  let totalTime = targetDate - startDate;
  let progress = now - startDate;
  let percentage = 0;
  percentage = percentage < 100 ? (progress / totalTime) * 100 : null;
  console.log("percentage", percentage);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        percentage={percentage}
      />
    );
  }
};

export default CountDownTimer;
