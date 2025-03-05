import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../redux/store";
import {
  setAuthorizationModalVisiblty,
  setRegLogOtp,
} from "../../redux/modal-slice";
import { Modal } from "antd";
import AuthModal from "./register-modal";
import OtpModal from "./otp-modal";
import LoginModal from "./login-modal";
import { Segmented } from "antd";

const Modals = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootStore) => state.modalReducer.authorizationModalVisiblty
  );

  const handleOk = () => {
    dispatch(setAuthorizationModalVisiblty({ open: false, isLoading: false }));
  };
  const handleCancel = () => {
    dispatch(setAuthorizationModalVisiblty({ open: false, isLoading: false }));
  };

  // header modal

  return (
    <Modal
      title=""
      footer={false}
      open={isOpen.open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className="header-modal w-[50%] m-auto">
        <Segmented
          className="w-full"
          value={isOpen.reglogotp}
          style={{ marginBottom: 8 }}
          onChange={(e: string) => {
            dispatch(setRegLogOtp(e));
          }}
          options={["REGISTER", "OTP", "LOGIN"]}
        />
      </div>

      {isOpen.reglogotp == "REGISTER" ? (
        <AuthModal />
      ) : isOpen.reglogotp == "OTP" ? (
        <OtpModal />
      ) : isOpen.reglogotp == "LOGIN" ? (
        <LoginModal />
      ): <AuthModal />
    }
    </Modal>
  );
};

export default Modals;
