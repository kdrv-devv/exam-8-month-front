// import { useEffect } from "react"
// import { useAxios } from "../../hooks/useAxios"

import SoonMovie from "../../components/home-components/soon-movie";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import MovieCard from "../../components/movie-card";
import Footer from "../../components/footer";
import AuthModal from "../../components/modals/register-modal";
import Modals from "../../components/modals";

const Home = () => {
  let btn_style =
    " h-8 flex items-center justify-center rounded-xl font-normal text-sm leading-[143%] text-center ";

  return (
    <div>
      <Navbar />
      <Showcase />

      <div className="sort bg-[#f2f2f5] py-2 mb-5">
        <div className="container w-[90%] m-auto">
          <div className="flex items-center gap-4">
            <button
              className={`${btn_style}  bg-[#00bfa5] text-white px-4   border border-[#00bfa5]`}
            >
              Сегодня
            </button>
            <button
              className={`${btn_style} px-4  border border-[#e7e7ec] bg-white font-normal text-[14px]`}
            >
              Завтра
            </button>
            <button
              className={`${btn_style} px-4  border border-[#e7e7ec] bg-white font-normal text-[14px] max-[700px]:hidden `}
            >
              Вторник, 4 марта
            </button>
            <button
              className={`${btn_style} px-4  border border-[#e7e7ec] bg-white font-normal text-[14px]  max-[700px]:hidden`}
            >
              Вторник, 5 марта
            </button>
          </div>
        </div>
      </div>

      <div className="container w-[90%] m-auto">
        <div className="grid gap-10 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx: number) => {
            return <MovieCard key={idx} />;
          })}
        </div>
      </div>

        <Modals/>
      <SoonMovie />
      <Footer />
    </div>
  );
};

export default Home;
