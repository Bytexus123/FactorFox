import Cookies from "js-cookie";

export function AccessToken(accessToken: any) {
  localStorage.setItem("access_token", JSON.stringify(accessToken));
}

export function handleLogout() {
  Cookies.remove("loggedIn");
  localStorage.clear();
  localStorage.removeItem("access_token");
  window.location.href = "/";
}

export const session_Time_Logout = 1000 * 60 * 25;
