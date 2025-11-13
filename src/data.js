const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const value_converter = (num) => {
  if (!num || isNaN(num)) return "0"; // Prevent undefined or NaN errors
  num = Number(num);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
export { API_KEY, value_converter };
