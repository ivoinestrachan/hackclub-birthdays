import { useTheme } from "next-themes";
import Image from "next/image";
import Flag from "../public/assets/flag.svg";
import Sun from "../public/assets/sun.svg";
import Moon from "../public/assets/moon.svg";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full flex items-center mx-auto justify-between px-16">
      <div>
        <a href="https://hackclub.com/">
          <Image
            src={Flag}
            alt="orpheous flag"
            width={112}
            height="63"
            className="cursor-pointer"
          />
        </a>
      </div>
      <div className="flex gap-5 items-center">
        <div>About</div>
        <a href="https://github.com/sikethedev/hackclub-birthdays">
          <FaGithub size={25} />
        </a>
        <div
          className="relative flex"
          onClick={() => setTheme((prev) => !prev)}
        >
          {!theme ? (
            <Image
              src={Moon}
              width="20"
              height="20"
              className="cursor-pointer"
            />
          ) : (
            <Image
              src={Sun}
              width="20"
              height="20"
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
