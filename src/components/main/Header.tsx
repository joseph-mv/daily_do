import React, { useContext, useEffect, useState } from "react";
import { dateToString } from "./utils";
import { DateContext } from "../../contextAPI/context";
import { useSelector } from "react-redux";
import { InitialState } from "../../redux/reducers/type";

const Header: React.FC = () => {
  const { date, setDate } = useContext(DateContext);
  const [startIndex, setStartIndex] = useState(0);
  const [daysArr, setDaysArr] = useState<string[]>([]);
  const today = dateToString(new Date());
  const todoList = useSelector((store: InitialState) => store.todo);
  const [animated,setIsAnimated]=useState(true)
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
    setDaysArr([...days]);
  }, [date]);

  const handleLeftClick = () => {
    Day.setDate(date.getDate() + startIndex - 6);
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

  
  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(false);
  }, 1000);     
      return () => {
        setIsAnimated(true);
        
      } 
  }, [todoList]);

  

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
        const formerDay=  today.split("-").reverse().join("") >=   
          day.split("-").reverse().join("")
          return (
            <>
              <li
                onClick={() => handleDateClick(day)}
                key={day}
                className={` relative outline-1 outline rounded-md min-w-[120px] text-center cursor-pointer pt-2 text-nowrap hover:scale-105 ${
                  dateToString(date) === day &&
                  "relative outline-none bg-coral px-4 rounded-t-lg  after:absolute  after:top-[90%]  after:left-0 after:w-full after:h-full  after:bg-coral"
                }`}
              >
                {getDisplayText(day) || day}
                <span className={`flex items-center justify-center  absolute -top-2 -right-2 bg-brightRed text-white text-xs size-6 rounded-full ${animated && dateToString(date) === day &&'animate-bounce'} `}>
                  {formerDay && (
                    <span>{todoList[day]?.completed || 0}/ </span>
                  )}
                  {todoList[day]?.count || 0}
                </span>
              </li>
            </>
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
