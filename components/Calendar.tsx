import { useState, useEffect } from "react";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";

interface Props {
  value?: Date;
  onChange: (value: Date) => void;
}
const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const numDays = differenceInDays(endDate, startDate) + 1;

  const lastMonthDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));

  return (
    <>
      <div className="flex items-center mx-auto justify-between pt-10">
        <div className="text-[#5bc0de] text-[32px] font-bold font-phantom">
          {format(value, "LLLL yyyy")}
        </div>
        <div className="flex gap-5">
          <div className="hover:bg-[#ADD8E6] relative flex items-center space-x-2 rounded-md py-1 px-2 sm:px-3 cursor-pointer">
            Week
          </div>
          <div className="hover:bg-[#ADD8E6] flex items-center space-x-2 rounded-md py-1 px-2 sm:px-3 cursor-pointer">
            Month
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            className="flex items-center bg-blue-700 space-x-2 rounded-md py-1 px-2 textstyle text-white  sm:space-x-3 sm:px-3"
            onClick={prevMonth}
          >
            Back
          </button>
          <button
            className="flex items-center bg-blue-700 space-x-2 rounded-md py-1 px-2 textstyle text-white sm:space-x-3 sm:px-3"
            onClick={nextMonth}
          >
            Next
          </button>
        </div>
      </div>
      <div
        id="weekdays"
        className="flex items-center"
      >
        {days.map((day) => (
          <div className="px-4 py-2 bg-black bg-opacity-80 backdrop-blur-lg grid place-items-center">{day}</div>
        ))}
      </div>
      <div className="flex items-center mx-auto justify-between pt-1 pb-2">
        <div className="grid grid-cols-7 items-center justify-center text-center w-4/5 lg:w-[100%]  gap-1">
          {Array.from({ length: lastMonthDays }).map((_, index) => (
            <div key={index}> </div>
          ))}
          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;

            return (
              <div
                className="bg-[#252429] h-[200px] rounded-sm text-white text-right pr-4 pt-2"
                key={date}
              >
                {date}
                <div className="text-center pt-[60px]">
                  Person Name Birthday
                </div>
              </div>
            );
          })}

          {Array.from({ length: suffixDays }).map((_, index) => (
            <div key={index}> </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
