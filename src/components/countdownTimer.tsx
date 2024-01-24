import { useTranslation } from "gatsby-plugin-react-i18next";
import * as React from "react";
import { useState, useEffect } from "react";

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

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const timerDisplay = (time: number, label: string) => {
    return (
      <div className="bg-white border-2 border-blue-800 rounded-full px-2 py-2 min-w-[80px]">
        <div id={label} className="font-bold text-xl text-blue-800">
          {time}
        </div>
        <div className="text-xs uppercase text-blue-800">
          {t(`counter.${label}`)}
        </div>
      </div>
    );
  };

  return (
    <section className="timer">
      <div className="max-w-lg mx-auto px-6 flex flex-col m-2">
        <p className="text-blue-800 text-sm lg:text-sm mb-1">{title}</p>

        <div className="flex flex-wrap items-center justify-center text-center gap-4 p-2 bg-white rounded-xl">
          <div>{timerDisplay(days, "days")}</div>
          <div>{timerDisplay(hours, "hours")}</div>
          <div>{timerDisplay(minutes, "minutes")}</div>
          <div>{timerDisplay(seconds, "seconds")}</div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
