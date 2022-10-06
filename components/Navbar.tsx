import {useTheme} from 'next-themes'
import Image from "next/image";
import Flag from "../public/assets/flag.svg"
import Sun from "../public/assets/sun.svg"
import Moon from "../public/assets/moon.svg"

const Navbar = () => {

  const {theme, setTheme} = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="w-4/5 lg:w-[90%] flex items-center mx-auto justify-between">
      <div>
      <Image src={Flag} alt="orpheous flag" width={112} height="63" className="cursor-pointer"/>
      </div>
      <div
            className="relative border bg-[#fff]  p-[0.35rem] rounded-full flex justify-between w-[4rem] cursor-pointer"
            onClick={() => toggleTheme()}
          >
            <div
              className={`absolute top-[0.05rem] transition duration-500 ease-in-out rounded-full bg-[#0055FF] w-[1.8rem] h-[1.8rem] transfrom  ${
                theme === "light"
                  ? "-translate-x-[0.20rem]"
                  : "translate-x-[1.6rem]"
              } `}
            ></div>
            
            <Image src={Sun} width="20" height="20" />
            <Image src={Moon} width="20" height="20" />
          </div>
        </div>
  );
}

export default Navbar;