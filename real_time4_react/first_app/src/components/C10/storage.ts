export const setItemInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const getItemInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);

  return result;
};
export const deleteItemInLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const setItemInSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};
export const getItemInSessionStorage = (key: string) => {
  const result = sessionStorage.getItem(key);

  return result;
};
export const deleteItemInSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
