import { AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/requests";
import { LoginDTO } from "../models/LoginDTO";

export function loginRequest(loginData: LoginDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/login",
    data: loginData,
  };

  return requestBackend(config);
}
