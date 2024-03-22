// get Random products
export const getRandomProducts = (prodsArray, n) => {
  return prodsArray?.products.sort(() => 0.5 - Math.random()).slice(0, n);
};

// ellipses to  cut long strings
export const addEllipses = (text) => {
  if (text.length > 50) {
    return text.substring(0, 50) + "...";
  }
  return text;
};
