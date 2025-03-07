import { MovieTicketData } from "../../@types";

interface MovieCardProps {
  value: MovieTicketData; // Prop sifatida obyektni olamiz
}
const SoonMovieCard = ({ value }: MovieCardProps) => {
  return (
    <div className="flex flex-col w-full minl-[553px] gap-[10px]">
      <div className="card-top relative rounded-[16px] overflow-hidden">
        <img
          className="w-full  h-[374px]"
          src={value.image}
          alt="moviecard-img"
        />
        <button className="absolute top-4 right-3 w-[72px] h-6 rounded bg-teal-500 font-normal text-[12px] leading-[133%] text-white">
          Премьера
        </button>
      </div>

      <h3 className="font-medium text-2xl leading-[133%] text-black">
        {value.title}
      </h3>

      <div className="flex items-center gap-2 flex-wrap">
        {value.genre.map((val: any, idx) => (
          <button
            key={idx}
            className=" px-3 h-7 rounded bg-[#f2f2f5] font-normal text-xs leading-[167%] text-[#727276]"
          >
            {val}
          </button>
        ))}
      </div>

      <p className="font-normal text-[12px] text-[#4c4c4f] text-start">
        {value.availableDate}
      </p>
    </div>
  );
};

export default SoonMovieCard;
