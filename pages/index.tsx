import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Calendar from "../components/Calendar";

const Home: NextPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <Head>
        <title>Hack Club Birthdays</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-5 flex flex-col items-center">
        <h1 className="text-bg text-[66px] font-extrabold">
          Hackclub Birthdays
        </h1>
        <div className="text-[24px]">
          A list of Hack Clubbers birthdays{" "}
          <a href="/celebrating">
            <span className="text-[#5bc0de] hover:underline">
              Lets celebrate!
            </span>
          </a>
        </div>
        <Calendar onChange={setCurrentDate} value={currentDate} />
      </div>
    </>
  );
};

export default Home;
