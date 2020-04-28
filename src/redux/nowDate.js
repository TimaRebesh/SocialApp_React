const getNowDate = (turn) => {
  const date = new Date();
  function addZeroToDate(num) {
    const numStr = String(num);
    if (numStr.length === 1) {
      return "0" + numStr;
    }
    return numStr;
  }
  if (turn === "hour") {
    return addZeroToDate(date.getHours()) + ":" + addZeroToDate(date.getMinutes()) + ":" + addZeroToDate(date.getSeconds());
  } else if (turn === "year") {
    return date.getFullYear() + ".0" + (date.getMonth() + 1) + "." + addZeroToDate(date.getDate());
  }
};

export default getNowDate;
