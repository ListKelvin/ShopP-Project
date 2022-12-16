export const MONTHS_SHORT = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
export const WEEKDAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const formatDate = (
  date,
  { hasDate = true, hasMonth = true, hasYear = true } = {}
) => {
  if (!date) {
    return "";
  }

  const formatDateOrdinal = (day) => {
    if (day < 1 || day > 31) return undefined;

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const weekdays = WEEKDAYS_SHORT;
  const months = MONTHS_SHORT;
  console.log(date.getMonth());
  const dateTime = {
    weekDay: weekdays[date.getDay()],
    day: date.getDate() > 10 ? `${date.getDate()}` : `0${date.getDate()}`,
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };

  return `${hasDate ? dateTime.day + "-" : ""}${
    hasMonth ? dateTime.month + "-" : ""
  }${hasYear ? dateTime.year : ""}`;
};
