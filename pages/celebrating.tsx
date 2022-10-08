import { useEffect, useState } from "react";

const Celebrating = () => {

  useEffect(() => {
    document.title = "Celebrate – Hack Club Birthdays"
  }, [])
  return (

    <div className="text-center pt-5 text-bg text-[66px] font-extrabold italic">
      Celebrating {}
    </div>
  );
}

export default Celebrating;