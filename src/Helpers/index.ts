
export const IsLoggedIn = (): boolean => {
  return window.localStorage.access_token !== undefined;
};

export const changeBrackground = (clase: string): void => {
  document.body.classList.forEach(
    function (token) {
      document.body.classList.remove(token);
    }
  );
  document.body.classList.add(clase);
};

export const setUserSession = (token: string): void => {
  localStorage.setItem("access_token", token);
  location.reload();
};

export const LogOut = (): void => {
  localStorage.clear();
  location.assign("/");
};
