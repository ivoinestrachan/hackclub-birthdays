import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Calendar from "../components/Calendar";

const Home: NextPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <div>
        <Head>
          <title>Hack Club Birthdays</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-center pt-5 text-bg text-[66px] font-extrabold italic">
          Hackclub Birthdays
        </h1>
        <div className="text-center text-[24px]">
          A list of Hack Clubbers birthdays <a href="/celebrating"><span className="text-[#5bc0de] hover:underline">“Lets celebrate!”</span></a>
        </div>
      </div>
      <Calendar onChange={setCurrentDate} value={currentDate} />
    </>
  );
};

export default Home;
