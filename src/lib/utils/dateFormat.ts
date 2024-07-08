import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (
  date: Date | string,
  format: string = "dd.MM.yyyy",
): string => {
  return formatInTimeZone(date, "Europe/Berlin", format);
};

export default dateFormat;
