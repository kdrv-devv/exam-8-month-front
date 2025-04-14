import axios from "axios";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
  params?: object;
  headers?: object;
  body?: object;
}

export const useAxios = () => {
  const response = ({ method, url, params, headers, body }: AxiosType) => {
    return axios({
      url:`https://ticket-sale-magic.onrender.com${url}`,
      method,
      params: {
        ...params,
      },
      headers:{
        "Content-Type": "application/json",
        ...headers,
      },
      data: body,
    });
  };

  return response;
};
