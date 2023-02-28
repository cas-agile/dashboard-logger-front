import { config } from "./config";
import axios from 'axios';

const loginRoute = `${process.env.REACT_APP_LOGGER_URL}/${config.API.LOGIN}`;
const registerRoute = `${process.env.REACT_APP_LOGGER_URL}/${config.API.REGISTER}`;

export function loginUser(email,password){
  return axios.post(loginRoute,
    {email, password}
  );
}

export function registerUser(name, surname , email, password){
  return axios.post(registerRoute,
    { email, name, surname, password }
  );
}
