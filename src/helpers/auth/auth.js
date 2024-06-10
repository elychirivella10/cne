import Axios from "axios";
import Cookies from 'js-cookie';
import { redirect } from "react-router-dom";
const TOKEN_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2Vuc29hcGkuc2FwaS5nb2IudmUiLCJpYXQiOjE3MDk1MTEyMTEsImF1ZCI6ImRhMzlhM2VlNWU2YjRiMGQzMjU1YmZlZjk1NjAxODkwYWZkODA3MDkifQ.b9rOxxkoB8gfuCm-jg5_01iY0U-QGl9kJ6MdtpWBGF4'
const TOKEN_NAME = 'name_user';
const TOKEN_ROLE = 'sr';
const TOKEN_USER = 'su';

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return Cookies.get('token');
}
export function getName() {
  return localStorage.getItem(TOKEN_NAME);
}
export function getRole() {
  return localStorage.getItem(TOKEN_ROLE);
}
export function getUser() {
  return localStorage.getItem(TOKEN_USER);
}

export function deleteName(e) {
  localStorage.removeItem(TOKEN_NAME);
}
export function deleteRole(e) {
  localStorage.removeItem(TOKEN_ROLE);
}
export function deleteUser(e) {
  localStorage.removeItem(TOKEN_USER);
}
export function deleteToken() {
  Cookies.remove('token')
  return window.location.href = "/login"
  
}

export async function getCurrentUser() {
  if (!getToken()) return false;
  try {
    let response = await Axios.get("/api/v1/auth/current");
    return response.data;
  } catch (error) {
    return false;
  }
}

export function initAxiosInterceptors() {
 const token = getToken()
  Axios.defaults.headers.post['Content-Type'] = 'application/json'
  Axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`

    return config
  });

  console.log(Axios)
  Axios.interceptors.response.use(
    response => response,
  );
}