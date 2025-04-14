import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";
import SeansItem from "./seans-item";
import { useAxios } from "../../hooks/useAxios";
import useLoader from "../../generic/useLoader";
import { MovieTicketData } from "../../@types";

const Seans = () => {





  const [loader , setLoader] = useState<boolean>(true)

  const axios = useAxios()

  const [seans , setSeans] = useState([])

  useEffect(()=>{
    let token = localStorage.getItem("token")

    axios({
      url:"/admin/get-movies",
      method:"GET",
      headers:{
        "Authorization": `Bearer ${token}`,
      }

    }).then((data) => {setSeans(data.data?.data) , setLoader(false)})
  },[])

  const { sessionLoader} = useLoader()


  return (
    <section>
      <Navbar />
      <Showcase />

      <main className="">
            <div className="w-[90%] m-auto">


          {
            loader ? Array.from({length:6}).map(()=> sessionLoader())  : seans.map((el:MovieTicketData )=> <SeansItem key={el._id} value={el} />)
          }

            </div>

      </main>

      <Footer />
    </section>
  );
};

export default Seans;
