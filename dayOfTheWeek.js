const dayOfTheWeek = (day, month, year) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const number = new Date(year, month - 1, day);

  return days[number.getDay()];
};

console.log(dayOfTheWeek(31, 8, 2019));
