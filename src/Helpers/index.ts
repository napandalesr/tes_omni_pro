
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
