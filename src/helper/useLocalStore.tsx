export const setLocalStore = (key: string, value: string) => {
  if (key && value) {
    window.localStorage.setItem(key, value);
    return true;
  } else {
    return false;
  }
};

export const getLocalStore = (key: string) => {
  if (key) {
    return window.localStorage.getItem(key);
  } else {
    return false;
  }
};
