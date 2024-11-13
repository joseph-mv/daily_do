import React, { useContext, useEffect, useState } from "react";
import { dateToString } from "./utils";
import { DateContext } from "../../contextAPI/context";


const Header: React.FC = () => {
const  {date,setDate}=useContext(DateContext)
  const [startIndex, setStartIndex] = useState(0);
  const [daysArr, setDaysArr] = useState<string[]>([]);
  const today = dateToString(new Date());

  const Day = new Date(date);
  useEffect(() => {
    const days: string[] = [];
    function get11Days() {
      for (let i = -5; i < 6; i++) {
        const Day = new Date(date); // avoid conflict with -ve values and
        Day.setDate(date.getDate() + i);
        days.push(dateToString(Day)); // Format as DD-MM-YYYY
      }
    }
    get11Days();
    // console.log(days)
    setDaysArr([...days]);
  }, [date]);

  const handleLeftClick = () => {
    // console.log(Day)
    Day.setDate(date.getDate() + startIndex - 6);
    // console.log(Day)
    daysArr.pop();
    daysArr.unshift(dateToString(Day));
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightClick = () => {
    Day.setDate(date.getDate() + startIndex + 6);
    daysArr.shift();
    daysArr.push(dateToString(Day));
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const getDisplayText = (day: string) => {
    if (today === day) return "Today";
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };
  const handleDateClick = (day: string) => {
    setDate(new Date(day.split("-").reverse().join("-")));
  };

  return (
    <header className=" m-0 mx-auto p-2 mt-12 border-y-2  border-coral">
      <i className="absolute top-3 right-3 text-2xl hover:-rotate-12  fa-solid fa-calendar-days"></i>
      <input
        onChange={handleDate}
        className="cursor-pointer opacity-0 absolute top-3 right-3 scale-150 rounded-full size-5 "
        type="date"
      />

      <i
        className="absolute left-2 top-14 text-3xl z-10 fa-solid fa-circle-chevron-left cursor-pointer hover:-translate-x-1"
        onClick={handleLeftClick}
      ></i>

      <ul className="flex w-[80%]   mx-auto items-center justify-center gap-[2vw]">
        {daysArr.map((day) => {
          return (
            <li
              onClick={() => handleDateClick(day)}
              key={day}
              className={`${
                dateToString(date) === day &&
                "relative bg-coral px-4 rounded-t-lg  after:absolute  after:top-[90%]  after:left-0 after:w-full after:h-full after:clip  after:bg-coral after:"
              } min-w-[120px] text-center cursor-pointer pt-2 text-nowrap hover:scale-105`}
            >
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
