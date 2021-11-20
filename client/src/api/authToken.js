export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem("token");
};

export const removeToken = () => {
  window.localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length < 3) {
    return false;
  }

  return JSON.parse(atob(parts[1]));
};

export const getPayload = () => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length < 3) {
    return false;
  }

  const jwt = atob(parts[1]);
  const jwtParsed = JSON.parse(jwt);

  // console.log({ jwt, token, parts });

  return jwtParsed;
};
