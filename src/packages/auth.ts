import Cookies from "js-cookie";

export function AccessToken(accessToken: any) {
  localStorage.setItem("access_token", JSON.stringify(accessToken));
}

export function runLogoutTimer(dispatch: any, timer: number) {
  setTimeout(() => {
    dispatch(handleLogout());
  }, timer);
}

export function handleLogout() {
  Cookies.remove("loggedIn");
  localStorage.clear();
  localStorage.removeItem("access_token");
  window.location.href = "/";
}
