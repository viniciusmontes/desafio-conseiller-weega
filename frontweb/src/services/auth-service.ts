import { AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/requests";
import { LoginDTO } from "../models/LoginDTO";

export function loginRequest(loginData: LoginDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/login",
    data: loginData,
  };

  return requestBackend(config).then((response) => {
    if (response.data && response.data.genre) {
      localStorage.setItem("userName", response.data.username);
      localStorage.setItem("userGenre", response.data.genre);
    }
    return response;
  });
}

export function registerRequest(registerData: LoginDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/register",
    data: registerData,
  };

  return requestBackend(config);
    
  };
