
import premium from "../../img/premium.svg";
import type { MovieTicketData } from "../../@types";
import { useDispatch } from "react-redux";
import { setChiptaModal } from "../../redux/modal-slice";

interface MovieCardProps {
  val: MovieTicketData;  // Prop sifatida obyektni olamiz
}
const VipTicket = ({val}:MovieCardProps) => {

  const dispatch = useDispatch()
  
 


  return (
    <div className="flex flex-col gap-3  ">
    <div onClick={()=> {dispatch(setChiptaModal({modal:true , id:val._id}))}} className="flex items-center cursor-pointer w-[120px] h-[50px] border-2 border-[#00bfa5] rounded ">
      <div className="w-[75%] border-r-[#00bfa5]">
        <div className="flex items-center  justify-center bg-[#00bfa5] w-[100%] h-[25px] text-[13px] rounded-tl rounded-tr-none rounded-br-none rounded-bl-none">
          <h5 className="text-white">{val.availableTime}</h5>
        </div>
        <div className="flex items-center gap-3 border border-r-[#00bfa5] h-[22px] w-[100%]  justify-center text-[10px]">
          <h5>{val.format}</h5>
          <h6>{val.price} сум</h6>
        </div>
      </div>
      <div className="w-[25px] flex flex-col items-center justify-center">
        <img src={premium} className="w-[17px] h-[17px]" alt="premium" />
        <p className="text-[12px] font-normal">VIP</p>
      </div>
    </div>
    <h4 className="text-start font-normal text-[10px] text-[#4c4c4f]">Зал №3 - Премьер</h4>
  </div>
  )
}

export default VipTicket