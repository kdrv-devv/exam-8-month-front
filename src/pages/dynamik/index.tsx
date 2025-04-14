import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import useLoader from "../../generic/useLoader";
import Modals from "../../components/modals";
const Dynamik = () => {

    const axios = useAxios()
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null) as any
    let token = localStorage.getItem("token")

    useEffect(() => {
        axios({
        url: `/admin/get-movies/${id}`,
        method:"GET",
        headers:{
            "Authorization": `Bearer ${token}`,
          }
      }).then((data) => setMovie(data.data?.data))
        .catch((error) => console.error("Xatolik:", error));
    }, [id]); 
  

    const {dynamikLoader} = useLoader()

    if (!movie) return dynamikLoader()
  return (
    <div>
      <Navbar />
      <Showcase />

      <section className="dynamik">
        <div className="container w-[90%] m-auto py-[40px] flex gap-8 items-start max-[853px]:flex-col">

          <div className="dynamik-left text-[10px] max-[853px]:text-[5.5px] ">
            <div className="card-top relative rounded-[16px] overflow-hidden cursor-pointer w-[30em]">
              <button className="absolute top-4 right-12 w-[7.2em] h-[2.4em] rounded bg-teal-500 font-normal text-[1.2em] leading-[133%] text-white">
                Премьера
              </button>

              <button className="absolute bottom-4 left-5 w-[3.2em] h-[2em] rounded bg-gray-400 font-normal text-[1.2em] leading-[133%] text-white">
                {}
              </button>
              <img src={movie.image} className="w-full h-[40em]" alt="img" />
            </div>
          </div>



          <div className="dynamik-right w-[100%] flex flex-col gap-4 text-[10px]" >
            <h4 className="text-[2em] text-gray-400">триллер</h4>
            <h1 className="text-[4em] max-[853px]:text-[3em]">{movie.title}</h1>
            <div className="line  w-full h-[5em] rounded-[3em] flex items-center gap-[2wm] px-[2em] bg-[#f2f2f5]">
              <button className=" top-[1.6em] right-[4.8em] w-[7.2em] h-[3.2em] rounded-[2em] bg-teal-500 font-normal text-[1.2em] leading-[133%] text-white">
                Премьера
              </button>
            </div>
            {/* <VipTicket val={{_id:"aadada"}} /> */}
            <div className="w-full flex flex-col gap-[1.6em] bg-[#f6f5f3] rounded-md p-[2em]">
              <div className="flex w-[40%] max-[600px]:w-full items-center justify-between">
                <h5 className="text-[1.2em]">Режиссёр</h5>
                <h6 className="text-[1.2em]">{movie.director}</h6>
              </div>
              <div className="flex w-[40%] max-[600px]:w-full items-center justify-between">
                <h5 className="text-[1.2em]">Хронометраж</h5>
                <h6 className="text-[1.2em]">
                    {movie.duration} мин.</h6>
              </div>
              <div className="flex w-[40%] max-[600px]:w-full items-center justify-between">
                <h5 className="text-[1.2em]">Страна</h5>
                <h6 className="text-[1.2em]">{movie.country}
                </h6>
              </div>
              <div className="flex w-[40%] max-[600px]:w-full items-center justify-between">
                <h5 className="text-[1.2em]">Год
                </h5>
                <h6 className="text-[1.2em]">{movie.year}</h6>
              </div>
            </div>

                <p className="text-[1.8em] text-gray-500"
                 > {movie.description}
                </p>

          </div>
        </div>
        <Footer/>
      </section>
      <Modals/>
    </div>
  );
};

export default Dynamik;
