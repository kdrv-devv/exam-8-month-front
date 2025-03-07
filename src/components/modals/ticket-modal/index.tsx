import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../../redux/store";
import { setChiptaModal } from "../../../redux/modal-slice";
import { useAxios } from "../../../hooks/useAxios";
import { useEffect, useState } from "react";
import notifications from "../../../generic/notifications";

const TicketModal = () => {
  const dispatch = useDispatch();
  const chiptaopen = useSelector(
    (state: RootStore) => state.modalReducer.chiptamodal
  );
  const chiptaID = useSelector(
    (state: RootStore) => state.modalReducer.chiptaId
  );

  const axios = useAxios();
  const [movie, setMovie] = useState(null) as any;
  let token = localStorage.getItem("token");

  useEffect(() => {
    axios({
      url: `/admin/get-movies/${chiptaID}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => setMovie(data.data?.data))
      .catch((error) => console.error("Xatolik:", error));
  }, [chiptaID]);

  if (!movie) return <p>Yuklanmoqda...</p>;

  const chiptaol = () => {
    axios({
      url: `/admin/chiptaol`,
      method: "PATCH",
      body: {
        chipta_soni: 1,
        movie_id: chiptaID,
      },
    })
      .then(() => {notifications("chiptaolindi") , dispatch(setChiptaModal({moda:false}))})
      .catch(() => notifications("err-chiptaolindi"));
  };

  return (
    <Modal
      title=""
      footer={false}
      open={chiptaopen}
      onCancel={() => {
        dispatch(setChiptaModal(false));
      }}
    >
      <div className="flex gap-5 items-start">
        <img className="w-[200px] h-[250px]" src={movie?.image} alt="img" />
        <div className="flex flex-col justify-between h-[230px] ">
          <div className="flex flex-col gap-1">
            <h1 className="text-[26px] ">{movie.title}</h1>
            <p className="text-gray-400">{movie.description}</p>
          </div>
          <div>
            <button onClick={()=>chiptaol()} className="bg-[#00bfa5] w-full h-[40px] flex items-center justify-center rounded-md text-white text-[16px]">
              Bilet sotib olish{" "}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TicketModal;
