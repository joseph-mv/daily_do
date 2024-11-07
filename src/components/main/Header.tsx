import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [daysArr, setDaysArr] = useState<string[]>([]);
  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");

  const [date, setDate] = useState<Date>(new Date());
  // const date = new Date();
  const Day = new Date();
  console.log(date);
  useEffect(() => {
    const days: string[] = [];
    function get11Days() {
      for (let i = -5; i < 6; i++) {
        Day.setDate(date.getDate() + i);
        days.push(
          Day.toISOString().split("T")[0].split("-").reverse().join("-")
        ); // Format as DD-MM-YYYY
      }
    }
    get11Days();
    setDaysArr([...days]);
  }, [date]);

  // Number of items to show at once
  // console.log(daysArr)
  const handleLeftClick = () => {
    Day.setDate(date.getDate() + startIndex - 6);
    daysArr.pop();
    daysArr.unshift(
      Day.toISOString().split("T")[0].split("-").reverse().join("-")
    );
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightClick = () => {
    Day.setDate(date.getDate() + startIndex + 6);
    daysArr.shift();
    daysArr.push(
      Day.toISOString().split("T")[0].split("-").reverse().join("-")
    );
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const getDisplayText = (day: string) => {
    if (today === day) return "today";
    // if (index === 4) return "yesterday";
    // if (index === 5) return "today";
    // if (index === 6) return "tomorrow";
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setDate(new Date(e.target.value));
  };

  return (
    <header className="overflow-hidden m-0 p-2 mt-12 border-y-2 border-coral">
      <input
        onChange={handleDate}
        className="absolute top-3 right-3 size-5 scale-150 rounded-full bg-red-400"
        type="date"
      />

      <i
        className="absolute left-2 top-14 text-3xl  fa-solid fa-circle-chevron-left cursor-pointer hover:-translate-x-1"
        onClick={handleLeftClick}
      ></i>

      <ul className="flex w-[80%]  overflow-hidden mx-auto items-center justify-center gap-[4vw]">
        {daysArr.map((day) => {
          // const actualIndex = startIndex + i;
          return (
            <li key={day} className="text-nowrap hover:scale-105">
              {getDisplayText(day) || day}
            </li>
          );
        })}
      </ul>
      <i
        className="absolute right-2 text-3xl top-14 fa-solid fa-circle-chevron-right cursor-pointer hover:translate-x-1"
        onClick={handleRightClick}
      ></i>
    </header>
  );
};

export default Header;
