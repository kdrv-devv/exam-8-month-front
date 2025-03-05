import { Link } from "react-router-dom";
import footerlogo from "../../img/navbar-logo.png";
import ios from "../../img/appstore.png";
import andr from "../../img/andr.png";
import payme from "../../img/payme.svg.png";
import click from "../../img/click.svg fill.png";
import insta from "../../img/insta.svg";

const Footer = () => {
  return (
    <footer className="footer bg-black ">
      <div className="footer-top !bg-[#263238] py-5">
        <div className="container w-[90%] m-auto flex items-center justify-between max-[450px]:items-start max-[450px]:gap-3 max-[450px]:flex-col  ">
          <Link to={"/"}>
            <img src={footerlogo} alt="img" />
          </Link>
          <div className="flex items-center gap-4">
            <img src={ios} alt="" />
            <img src={andr} alt="" />
          </div>
        </div>
      </div>

      <div className="container w-[90%] m-auto">
        <div className=" flex-wrap gap-8 footer-center flex items-start justify-between pt-10 ">
          <div className="footer-center-left flex items-start gap-[100px]">
            <div className="menu flex flex-col gap-2 text-white">
              <h4 className="text-[18px]">Меню</h4>
              <a href="#" className="text-[15px] text-[#00bfa5]">
                Афиша
              </a>
              <a href="#" className="text-[15px] text-[#00bfa5]">
                Сеансы
              </a>
              <a href="#" className="text-[15px] text-[#00bfa5]">
                Скоро в кино
              </a>
              <a href="#" className="text-[15px] text-[#00bfa5]">
                Кинотеатр
              </a>
              <a href="#" className="text-[15px] text-[#00bfa5]">
                Контакты
              </a>
            </div>

            <div className="oplati text-white flex flex-col gap-3">
              <h5>Способы оплаты</h5>
              <div className="flex items-center gap-2">
                <img src={payme} alt="" />
                <img src={click} alt="" />
              </div>

              <h5>Социальные сети</h5>
              <img className="w-[30px] h-[30px]" src={insta} alt="" />
            </div>
          </div>
          <div className="footer-center-right text-white flex flex-col gap-5">
            <div className="flex flex-col ">
              <h6 className="text-[18px]">Ташкент</h6>
              <p className="text-[15px] text-[#00bfa5]">ул. Бабура, 174</p>
            </div>

            <div className="flex flex-col gap-1">
              <h6>Контакты</h6>
              <a href="tel:999979661575" className="text-[24px] text-[#00bfa5]">
                +998(71) 2052050
              </a>
              <p className="text-[13px]">Для Информации</p>
            </div>

            <div className="flex flex-col ">
              <h5>Время работы</h5>
              <p className="text-[15px] font-[300] ">С 10-00 до 23-00</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex flex-col gap-3 mt-6">
          <div className="max-[649px]:flex-wrap gap-5 flex items-center justify-between ">
            <div className="text-white">
              <h5>© 2025. Все права защищены</h5>
              <p>
                Разработано в <span className="text-[#00bfa5]">Киноплане</span>
              </p>
            </div>
            <button className=" max-[470px]:w-full w-[248px] h-[42px] rounded-[4px] bg-white  font-normal text-[16px] leading-[115%] text-center text-black"
            >Версия для слабовидящих</button>
          </div>
          <p className="max-[500px]:w-full text-white text-[12px] opacity-35 w-[40%] max-[1043px]:w-[50%] max-[667px]:w-[60%]">
            Все сеансы начинаются с рекламно-информационного блока. Точную
            продолжительность сеансов можно уточнить в кинотеатре.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
