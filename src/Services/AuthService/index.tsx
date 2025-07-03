import axios from "axios";

interface AuthJson {
  password: string;
}

export const doAdminVerification = async (authJson: AuthJson) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", authJson);
};
