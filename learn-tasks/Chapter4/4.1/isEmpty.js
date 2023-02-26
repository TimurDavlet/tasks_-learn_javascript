const isEmpty = (obj) => {
  const keys = Object.keys(obj);
  return keys.length > 0 ? false : true;
}