import { MovieTicketData } from "../../../@types";

interface MovieCardProps {
    value: MovieTicketData; 
  }


const SeansItem = ({value} : MovieCardProps) => {
  return (
    <div className="w-full text-[10px] flex items-start gap-[16px] py-3 border-b ">
      <button className="rounded-[0.6em] w-[6.4em] h-[3.2em] bg-[#00bfa5]  text-white font-[400]"><span className="text-[1.6em]">{value.availableTime}</span></button>
      <div className="flex flex-col gap-[0.4em]">
        <h4 className="text-[1.8em] font-[700] ">{value.title}</h4>
        <div className="flex items-center gap-[0.5em]">
            <button className="h-[2em] w-auto rounded-[0.4em] bg-[#f2f2f5] text-[1em]  p-1  uppercase text-[#727276] font-[300]">16+</button>
            {
          value.genre.map((val:any)=>              <button className="h-[2em] w-auto rounded-[0.4em] bg-[#f2f2f5] text-[1em]  p-1  uppercase text-[#727276] font-[300]">{val}</button>
        )
        }
        </div>
        <div className="flex items-center gap-[1em] text-[1.2em] font-[300] text-[#727276]" >
                <p>{value.format}</p>
                <p>{value.price} so'm</p>
                <p>Zal n5</p>
                <p>{value.hallNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default SeansItem;
