export const formatNumber = (num) => {
  const int = typeof num === "string" ? parseInt(num) : num;
  if (int === 0) {
    return "0";
  }
  if (!num) {
    return "";
  }
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
