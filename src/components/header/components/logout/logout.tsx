import Cookies from "js-cookie";
export const handleLogout = () => {
  Cookies.remove("loggedIn");
  localStorage.clear();
  window.location.href = "/";
};
