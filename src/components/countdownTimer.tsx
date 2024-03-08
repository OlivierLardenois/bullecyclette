import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  title: string;
  deadline: string;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ title, deadline }) => {
  const { t } = useTranslation();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.max(Math.floor(time / (1000 * 60 * 60 * 24)), 0));
    setHours(Math.max(Math.floor((time / (1000 * 60 * 60)) % 24), 0));
    setMinutes(Math.max(Math.floor((time / 1000 / 60) % 60), 0));
    setSeconds(Math.max(Math.floor((time / 1000) % 60), 0));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const timerDisplay = (time: number, label: string) => {
    return (
      <div className="border-2 border-liberty rounded-full p-2 min-w-[80px] text-liberty text-center">
        <div id={label} className="font-bold text-xl">
          {time}
        </div>
        <p className="text-xs uppercase">{t(`countdown-timer.${label}`)}</p>
      </div>
    );
  };

  return (
    <div className="inline-block">
      <p className="text-sm mb-2">{title}</p>

      <div className="inline-flex flex-wrap justify-center gap-4 p-4 bg-white rounded-xl">
        <div>{timerDisplay(days, "days")}</div>
        <div>{timerDisplay(hours, "hours")}</div>
        <div>{timerDisplay(minutes, "minutes")}</div>
        <div>{timerDisplay(seconds, "seconds")}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
