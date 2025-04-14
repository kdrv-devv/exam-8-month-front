import Footer from "../../components/footer"
import SoonMovie from "../../components/home-components/soon-movie"
import Navbar from "../../components/navbar"
import Showcase from "../../components/showcase"

const SoonMoviePage = () => {
  return (
    <>
      <Navbar />
      <Showcase />  
      <SoonMovie />

      <Footer/>
    </>
  )
}

export default SoonMoviePage