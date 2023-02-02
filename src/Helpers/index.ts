
export const IsLoggedIn = (): boolean => {
  return window.localStorage.access_token !== undefined;
};
