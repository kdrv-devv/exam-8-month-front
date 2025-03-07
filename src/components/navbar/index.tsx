import { Link, useNavigate } from "react-router-dom";
import navbarlogo from "../../img/navbar-logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { RxExit } from "react-icons/rx";

import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

const Navbar = () => {


  const navigate = useNavigate()
  const [openbars, setOpenBars] = useState(false);
  let link_style =
    "font-normal text-[24px] leading-[171%]h5 text-[#ffff] border-b w-full";

  const btn = (width: number, height: number, radius: number): string => {
    return `w-[${width}px] h-[${height}px] rounded-[${radius}px] bg-[#00bfa5]`;
  };

  const isverify = useSelector((state: RootStore) => state.verifyReducer);

  return (
    <header className="bg-[#263238]">
      <div className="container w-[90%] m-auto flex gap-5 items-center justify-between py-3">
        <div className="header-left flex items-center gap-[4em] ">
          <Link to={"/"}>
            <img
              className="max-[780px]:w-17  max-[780px]:h-17"
              src={navbarlogo}
              alt="magic cinema biletlari"
            />
          </Link>
          <div className=" flex  flex-col  max-[840px]:hidden  ">
            <h4  className="font-normal text-4 text-3  text-[#fff]">Ташкент</h4>
            <a href="#" className="font-light text-2 opacity-50 text-[#fff] ">
              Парк Magic City, <br />
              ул. Бабура, 174
            </a>
          </div>

          <div className="flex flex-col max-[780px]:hidden">
            <a
              href="tel:+998979661575"
              className="font-normal text-4 text-[#fff]"
            >
              +998(71) 2052050
            </a>
            <a href="#" className="font-light text-3 opacity-50 text-[#fff]">
              Для Информации
            </a>
          </div>
        </div>
        <div className="header-right flex items-center  gap-4 ">
          <div className="hidden max-[780px]:flex gap-4">
            {isverify.isverify ? (
              <button className="w-[30px]  h-[30px] bg-slate-300 rounded-full flex items-center justify-center text-black">
                {isverify.userData?.user.name.slice(0, 1)}
              </button>
            ) : (
              <button className="hidden max-[780px]:flex text-[29px] text-[#33c558]">
                <FaRegUserCircle />
              </button>
            )}
            <button
              onClick={() => {
                setOpenBars(true);
              }}
              className="hidden max-[780px]:flex text-[29px] text-[#4ad36c] "
            >
              <AiOutlineBars />
            </button>
          </div>

          <button className=" max-[840px]:hidden  w-8 h-8 rounded-[100%] flex items-center justify-center text-[20px] bg-[#a8adaf] text-[#263238] ">
            <FaInstagram />
          </button>
          <button className="w-[194px] max-[780px]:hidden h-8 rounded-[40px]  bg-[#00bfa5] flex items-center justify-center text-[#fff] font-normal text-4 p-2">
            Мне не пришёл билет
          </button>
          {isverify.isverify ? (
            <button className="w-[30px] max-[780px]:hidden h-[30px] bg-slate-300 rounded-full flex items-center justify-center text-black">
              {isverify.userData?.user.name.slice(0, 1)}
            </button>
          ) : (
            ""
          )}
        </div>

        <div
          className={` bars-window z-50 w-[100%] h-screen flex items-start pt-[90px] pl-[50px] pr-[50px] flex-col gap-6  transition-all top-0 bottom-0 bg-[#263238] fixed ${
            openbars ? "left-0" : "left-[-100%]"
          } `}
        >
          <button
            onClick={() => {
              setOpenBars(false);
            }}
            className=" z-50 absolute top-10 right-6 text-[#fff] text-[35px]"
          >
            <RxExit />
          </button>

          <Link to={"/"} className="absolute left-6 top-5">
            <img
              className=" max-[780px]:h-14  max-[780px]:w-14"
              src={navbarlogo}
              alt="magic cinema biletlari"
            />
          </Link>

          <div className=" flex  flex-col   ">
            <h4 className="font-normal  text-[24px]  text-[#fff]">
              Ташкент <CiLocationOn className="inline" />
            </h4>
            <a href="#" className="font-light text-2 opacity-50 text-[#fff] ">
              Парк Magic City, ул. Бабура, 174{"  "}
            </a>
          </div>

          <div className="flex w-full  pb-[20px] border-b-2 flex-col items-start justify-start ">
            <a
              href="tel:+998979661575"
              className="font-normal  text-[25px] text-[#fff]"
            >
              +998(71) 2052050{" "}
            </a>
            <a href="#" className="font-light text-3 opacity-50 text-[#fff]">
              Для Информации
            </a>
          </div>

          <div className="flex flex-col gap-5 items-start w-full">
            <h5 className={link_style}>Афиша</h5>
              <p onClick={()=> navigate("/seans")} className={link_style}>Сеансы</p>
            <h5 className={link_style}>Скоро в кино</h5>
            <h5 className={link_style}>Кинотеатр</h5>
            <h5 className={link_style}>Контакты</h5>

            <button className="w-full text-white text-xl h-10 rounded-2xl bg-[#00bfa5]">
              Войти
            </button>
            <button  className="w-full text-white text-xl h-10 rounded-2xl bg-[#00bfa5]">
              Написать отзыв
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
