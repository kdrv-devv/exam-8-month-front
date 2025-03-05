import movieCardimg from '../../img/moviecard.png'


const SoonMovieCard = () => {
  return (
    <div className="flex flex-col w-full minl-[553px] gap-[10px]">
      <div className="card-top relative rounded-[16px] overflow-hidden">
        <img
          className="w-full  h-[374px]"
          src={movieCardimg}
          alt="moviecard-img"
        />
        <button className="absolute top-4 right-3 w-[72px] h-6 rounded bg-teal-500 font-normal text-[12px] leading-[133%] text-white">
          Премьера
        </button>
      </div>

      <h3 className="font-medium text-2xl leading-[133%] text-black">
        Обезьяна
      </h3>

      <div className="flex items-center gap-2">
        <button className="px-3 h-7 rounded bg-[#f2f2f5] font-normal text-xs leading-[167%] text-[#727276]">
          18+
        </button>
        <button className=" px-3 h-7 rounded bg-[#f2f2f5] font-normal text-xs leading-[167%] text-[#727276]">
          хоррор
        </button>
      </div>

        <p className='font-normal text-[12px] text-[#4c4c4f] text-start'>с 6 марта 2025</p>

  
    </div>
  )
}

export default SoonMovieCard