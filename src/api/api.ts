import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "./config";

export const get = (url: string) => {
  return axios
    .get(BASE_URL + url)
    .then(({ data }) => {
      return data;
    })
    .catch(({ error }) => {
      toast.error(error);
    });
};
