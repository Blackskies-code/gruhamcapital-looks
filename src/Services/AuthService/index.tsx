import axios from "axios";
import type { AuthJson } from "../../Types";

export const doAdminVerificationApi = async (authJson: AuthJson) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", authJson);
};
