import { format } from "date-fns";

export const formatDate = (
  dateString: string,
  type: string = "MMM yyyy",
): string => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "n/a";
  }

  return format(date, type);
};
