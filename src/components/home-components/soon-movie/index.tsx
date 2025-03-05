import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SoonMovieCard from "../../soon-movie-card";

const SoonMovie = () => {
  return (
    <section className="bg-[#f8f8f8] pb-10 ">
      <div className="container w-[90%] m-auto pt-4 mt-8">
        <div className="soon-header flex items-center justify-between py-4">
          <h2 className="font-bold text-[32px] leading-[115%] text-black max-[400px]:text-[24px]">
            Скоров кино
          </h2>
          <Link to={"/"}>
            {" "}
            <h4 className="font-normal flex gap-2 hover:underline transition-all text-[14px] leading-[115%] text-black">
              Показать все <MdOutlineKeyboardArrowRight />
            </h4>
          </Link>
        </div>

        <div className="grid grid-cols-6 gap-[20px] max-[499px]:grid-cols-1  max-[700px]:grid-cols-2  max-[1000px]:grid-cols-3  max-[1200px]:grid-cols-6  max-[1300px]:grid-cols-4">
          {Array.from({ length: 2 }).map((_, idx) => (
            <SoonMovieCard key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SoonMovie;
