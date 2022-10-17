export function logOut() {
  localStorage.removeItem("userId");
  localStorage.removeItem("jwt");
  window.location.href = "/";
}
