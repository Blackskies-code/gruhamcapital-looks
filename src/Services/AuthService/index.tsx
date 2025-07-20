import axios from "axios";
import type { AuthJson } from "../../Types";

export const doAdminVerificationApi = async (reqBody: AuthJson) => {
  console.log("auth json body", reqBody);
  return axios.post(`${import.meta.env.VITE_API_URL}/verify_admin`, reqBody);
};

export const hashPassword = async (token: string) => {
  // Encode the string as a Uint8Array
  const msgBuffer = new TextEncoder().encode(token);

  // Hash the message using SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // Convert the ArrayBuffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};
