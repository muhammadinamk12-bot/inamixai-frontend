export function setToken(token: string) {
  localStorage.setItem("inamix_token", token);
}

export function getToken() {
  return localStorage.getItem("inamix_token");
}

export function logout() {
  localStorage.removeItem("inamix_token");
}