import React from "react";
import { formatDate } from "@/app/lib/utils/date/dateUtils";
import classNames from "classnames";
import { DateRangeProps } from "@/app/components/CVPreview/DateRange/DateRange.types";

// Create a type that enforces either start or end to be required

const DateRange: React.FC<DateRangeProps> = ({
  start,
  end,
  format = "MMM yyyy",
  showPresent = true,
  className,
}) => {
  const formattedStart = start ? formatDate(start, format) : "";
  const formattedEnd = end
    ? formatDate(end, format)
    : showPresent
      ? "Present"
      : "";

  const shouldShowDash = (start && end) || (start && !end && showPresent);

  const classes = classNames("text-xs", className);

  return (
    <div className={classes}>
      {formattedStart || formattedEnd}
      {shouldShowDash && formattedEnd ? ` - ${formattedEnd}` : ""}
    </div>
  );
};

export default DateRange;
