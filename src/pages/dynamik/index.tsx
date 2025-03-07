import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import img from "../../img/moviecard.png";
import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
const Dynamik = () => {

    const axios = useAxios()
    const { id } = useParams(); // URL dan id ni olish
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
    }, [id]); // ID o‘zgarganda fetch qilish
  
    if (!movie) return <p>Yuklanmoqda...</p>;
  return (
    <div>
      <Navbar />
      <Showcase />

      <section className="dynamik">
        <div className="container w-[90%] m-auto pt-[40px] flex gap-8 items-start">
          <div className="dynamik-left">
            <div className="card-top relative rounded-[16px] overflow-hidden cursor-pointer w-[300px]">
              <button className="absolute top-4 right-12 w-[72px] h-6 rounded bg-teal-500 font-normal text-[12px] leading-[133%] text-white">
                Премьера
              </button>
              <button className="absolute bottom-4 left-5 w-[32px] h-6 rounded bg-gray-400 font-normal text-[12px] leading-[133%] text-white">
                {}
              </button>
              <img src={movie.image} className="w-full h-[400px]" alt="img" />
            </div>
          </div>
          <div className="dynamik-right w-[100%] flex flex-col gap-4">
            <h4 className="text-[20px] text-gray-400">триллер</h4>
            <h1 className="text-[40px]">{movie.title}</h1>
            <div className="line  w-full h-[50px] rounded-[30px] flex items-center gap-6 px-6 bg-[#f2f2f5]">
              <button className=" top-4 right-12 w-[72px] h-8 rounded-[20px] bg-teal-500 font-normal text-[12px] leading-[133%] text-white">
                Премьера
              </button>
            </div>
            {/* <VipTicket val={{_id:"aadada"}} /> */}
            <div className="w-full flex flex-col gap-4 bg-[#f6f5f3] rounded-md p-5">
              <div className="flex w-[40%] items-center justify-between">
                <h5>Режиссёр</h5>
                <h6>{movie.director}</h6>
              </div>
              <div className="flex w-[40%] items-center justify-between">
                <h5>Хронометраж</h5>
                <h6>
                    {movie.duration} мин.</h6>
              </div>
              <div className="flex w-[40%] items-center justify-between">
                <h5>Страна</h5>
                <h6>{movie.country}
                </h6>
              </div>
              <div className="flex w-[40%] items-center justify-between">
                <h5>Год
                </h5>
                <h6>{movie.year}</h6>
              </div>
            </div>

                <p className="text-[18px] text-gray-500"
                 > {movie.description}
                </p>

          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
};

export default Dynamik;
