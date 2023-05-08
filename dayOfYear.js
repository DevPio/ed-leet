const dayOfYear = function (date) {
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const firstMonth = new Date(`${year}-01-01`).getTime();
  const oneDaySeconds = 86400000;

  return Math.ceil(currentDate.getTime() - firstMonth / oneDaySeconds) + 1;
};
