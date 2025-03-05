import { SubmitHandler, useForm } from "react-hook-form";
import { useAxios } from "../../../hooks/useAxios";

import { AtSign, Lock } from "lucide-react";
import notifications from "../../../generic/notifications";
import { setRegLogOtp } from "../../../redux/modal-slice";
import { useDispatch } from "react-redux";

interface UserData {
  email: string;
  otp: string;
}

const OtpModal = () => {
  const axios = useAxios();
    const dispatch = useDispatch()
  const { register, handleSubmit } = useForm<UserData>();
  const onSubmit: SubmitHandler<UserData> = (data) => {
    
    axios({
      url: "/auth/register-otp",
      method: "POST",
      body: data,
    })
      .then(() => {
        notifications("otp");
        dispatch(setRegLogOtp("LOGIN"));
      })
      .catch(() => {
        notifications("error-otp");
      });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 rounded-md p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#00BFA5" }}
        >
          Verify the code
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AtSign className="text-gray-400" size={20} />
            </div>
            <input
              type="email"
              {...register("email")}
              placeholder="Emile"
              required
              className="w-full pl-10 border-[#00BFA5] pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-gray-400" size={20} />
            </div>
            <input
              type="password"
              {...register("otp")}
              placeholder="OTP code"
              required
              className="w-full pl-10  border-[#00BFA5] pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00BFA5] hover:bg-[#008f7f] py-3 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpModal;
