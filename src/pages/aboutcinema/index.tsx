import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";

import aboutone from "../../img/aboutoneimg.png";
import aboutsecond from "../../img/aboutsecondimg.png";

const AboutCinema = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <main className="about-cinema">
        <div className="about-cinema-top bg-[#f2f2f5] text-[10px] py-3">
          <div className="container w-[90%] m-auto h-[9.4em] rounded-[0.8em]  abouttop  flex items-start px-6 justify-center flex-col">
            <h3 className="text-[2.1em] font-[600]">Magic Cinema</h3>
            <a href="#" className="font-[400] text-[1.4em] ">
              ул. Бабура, 174
            </a>
          </div>
        </div>
        <div className="about-cinema-center">
          <div className="container w-[90%] m-auto py-2 text-[10px] flex items-center gap-3">
            <button className="w-[11.2em] h-[3.2em] rounded-[1.6em] border border-[#d9d9df] bg-[#00bfa5] ">
              {" "}
              <span className="text-[1.6em] text-white font-[400]">
                Кинотеатр
              </span>{" "}
            </button>
            <button className="w-[19.2em] h-[3.2em] rounded-[1.6em] border border-[#d9d9df] bg-[#fff]  ">
              {" "}
              <span className="text-[1.6em] text-[#000] font-[400]">
                Информация о залах
              </span>{" "}
            </button>
          </div>
        </div>

        <div className="about-cinema-bottom pt-8">
          <div className="w-[90%] m-auto text-[10px]">
            <h2 className="text-[3.2em] text-[#000] font-[700] text-start">
              О кинотеатре
            </h2>
          </div>
          <div className="container w-[90%] m-auto text-[10px] flex flex-col gap-[] items-center pt-4">
            <div className="flex flex-col gap-[5px]">
              <img src={aboutone} alt="Magic cinema" />
              <img src={aboutsecond} alt="Magic cinema" />
            </div>
          </div>

          <div className="w-[90%] m-auto text-[10px] max-[643px]:text-[8px]">
            <h5 className="text-[1.6em] font-[400] text-[#414141] ">
              Сложно удивить современного кинозрителя. Для него важно не только
              смотреть кино, но и ощутить полное погружение в ту или иную
              историю киноленты. Качество изображения и звука в совокупности
              играет немаловажную роль, чтобы искушенный зритель оторвался от
              онлайн просмотров и посетил кинотеатр
            </h5>

            <h3 className="text-[2.4em] mt-5 font-[700] text-[#414141]">
              Теперь каждый из вас может открыть для себя новые возможности при
              просмотре кино через призму передовых технологий.
            </h3>
            <h3 className="text-[2.4em] font-[700] text-[#414141]">
              Magic Cinema – первый в Узбекистане лазерный кинотеатр с системой
              звука Dolby Digital, являющейся скачком в мире кинотехнологий.
              Насыщенное, яркое и четкое изображение в сочетании с кристальным
              звуком, все что нужно, чтобы зритель стал частью событий,
              погрузился в волшебные миры и испытывал все эмоции главных героев
              фильма.
              Первый лазерный кинотеатр Magic Cinema, включает в себя 6 залов со вместимостью 430
человек. Каждый ценитель кино, от мала до велика, найдет то, что по душе именно ему.
            </h3>
            <h3 className="text-[2.4em] font-[700] text-[#414141] pt-4">
            Кино должно заставить забыть зрителя о том, что он сидит в кино, что осуществимо в Magic
            Cinema!
            </h3>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutCinema;
