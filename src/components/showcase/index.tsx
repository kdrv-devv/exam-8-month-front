import { Carousel } from "antd";
import showcaseimg1 from "./../../img/showcase.png";
import showcaseimg2 from "./../../img/showcase2img.jpg";
import { useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorizationModalVisiblty } from "../../redux/modal-slice";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

const Showcase = () => {
  const carouselRef = useRef<CarouselRef>(null); // Ref bilan ishlash
  const isverify = useSelector(
      (state: RootStore) => state.verifyReducer.isverify    );

  const nextSlide = () => {
    carouselRef.current?.next(); // Keyingi slayd
  };
  const prevSlide = () => {
    carouselRef.current?.prev(); // Oldingi slayd
  };
  // modal ochish uchun
  const dispatch = useDispatch();

  return (
    <section className="showcase relative">
      <button
        onClick={prevSlide}
        className=" max-[600px]:hidden  absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 w-12 h-12 rounded-[24px] flex items-center justify-center z-10  text-[25px]"
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="max-[600px]:hidden  absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 w-12 h-12 rounded-[24px] flex items-center justify-center z-10 text-[25px]"
      >
        <MdOutlineKeyboardArrowRight />
      </button>

      <Carousel ref={carouselRef} infinite={false} className="">
        <div className="!bg-black h-[361px] max-[920px]:h-[310px] max-[743px]:h-[270px] max-[585px]:h-[220px] max-[465px]:h-[180px] ">
          <img className="w-full h-full" src={showcaseimg1} alt="" />
        </div>
        <div className="!bg-black h-[361px] max-[920px]:h-[310px] max-[743px]:h-[270px] max-[585px]:h-[220px] max-[465px]:h-[180px] ">
          <img className="w-full h-full" src={showcaseimg2} alt="" />
        </div>
      </Carousel>

      <div className="container w-[90%] m-auto">
        <div className="flex items-center gap-[30px] py-2  max-[420px]:overflow-x-scroll max-[420px]:gap-[15px]">
          <Link to={"/"}>
            <h5 className="font-normal text-xl max-[545px]:text-sm leading-[171%] text-center text-black">
              Афиша
            </h5>
          </Link>
          <Link to={"/"}>
            <h5 className="font-normal text-xl max-[545px]:text-sm leading-[171%] text-center text-black">
              Сеансы
            </h5>
          </Link>
          <Link to={"/"}>
            <h5 className="font-normal text-xl max-[545px]:text-sm leading-[171%] text-center text-black">
              Скоро в кино
            </h5>
          </Link>
          <Link to={"/"}>
            <h5 className="font-normal text-xl max-[545px]:text-sm leading-[171%] text-center text-black">
              Кинотеатр
            </h5>
          </Link>
          {!isverify ? (
            <button
              onClick={() => {
                dispatch(
                  setAuthorizationModalVisiblty({
                    open: true,
                    isLoading: false,
                  })
                );
              }}
              className="w-[69px] max-[820px]:hidden h-10 rounded-2xl bg-teal-500 text-white"
            >
              Войти
            </button>
          ) : (
            ""
          )}
          <button className="w-[140px] max-[820px]:hidden h-10 rounded-2xl bg-teal-500 text-white">
            Написать отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
