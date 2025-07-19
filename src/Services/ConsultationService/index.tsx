import axios from "axios";

interface IConsultationReqProps {
  name: string;
  mobile: number | undefined;
  email: string;
  purpose: string;
  slot_id: string;
}

export const getScheduleForConsultationApi = async (reqBody: any) => {
  //   api to fetch the available slots for a user to book
  return axios.post(`${import.meta.env.VITE_API_URL}/slots`, reqBody);
};

// const timeoutFn = () => {
//   return new Promise((resolve, _) => {
//     setTimeout(() => {
//       console.log("timeout in promise");
//       resolve("done");
//     }, 5000);
//   });
// };

export const createConsultationApi = (reqBody: IConsultationReqProps) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/add_consultation`,
    reqBody
  );
};
