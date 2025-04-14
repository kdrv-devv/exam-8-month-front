import VipTicket from "../vip-ticket";
import type { MovieTicketData } from "../../@types";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  value: MovieTicketData; 
}
const MovieCard = ({value}:MovieCardProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${value._id}`); 
  };


  return (
    <div className="flex flex-col w-full min-h-[553px]  gap-[10px]">
      <div onClick={handleClick}  className="card-top relative rounded-[16px] overflow-hidden cursor-pointer">
       
      <img
          className="w-full transition-transform duration-300 hover:scale-110 h-[374px] "
          src={value.image}
          alt={value.title}
        />
        <button className="absolute top-4 right-3 w-[72px] h-6 rounded bg-teal-500 font-normal text-[12px] leading-[133%] text-white">
          Премьера
        </button>
      </div>

      <div className="font-medium text-2xl leading-[133%] text-black">
        <p> {value.title}</p>
        <span className="text-sm">qolgan chiptalar soni: {value.ticket_count}</span>
        
      </div>

      <div className="flex items-center flex-wrap gap-2">
        {
          value.genre.map((val:any)=>   <button className="px-3 h-7 rounded bg-[#f2f2f5] font-normal text-xs leading-[167%] text-[#727276]">
          {val}
        </button> )
        }
      </div>

      <div className="grid grid-cols-2 gap-4">
        <VipTicket val={value} />
      </div>
    </div>
  );
};
export default MovieCard;
