# `DateRange` Component

The `DateRange` component is a React functional component that formats and displays a date range. It utilizes the `formatDate` utility function to ensure consistent and clean date formatting. The component is flexible and requires either a `start` or `end` date but allows for customization in formatting and display options.

## Component Signature

```typescript
import React from "react";
import { formatDate } from "@/app/lib/utils/date/dateUtils";
import classNames from "classnames";

interface DateRangeBaseProps {
  format?: string; // Optional format string for dates
  showPresent?: boolean; // Optional flag to show "Present" for ongoing dates
  className?: string; // Optional className for additional styling
}

type DateRangeProps =
  | ({ start: string; end?: string } & DateRangeBaseProps) // Start is required, end is optional
  | ({ start?: string; end: string } & DateRangeBaseProps); // End is required, start is optional

const DateRange: React.FC<DateRangeProps> = ({
  start,
  end,
  format = "MMM yyyy",
  showPresent = true,
  className,
}) => {
  // Component implementation
};
```

## Props

- **`start`** (`string` | `undefined`): The start date string to be formatted and displayed. Required if `end` is not provided.
- **`end`** (`string` | `undefined`): The end date string to be formatted and displayed. Required if `start` is not provided.
- **`format`** (`string`): The format of the dates. This is optional. If not provided, it defaults to `"MMM yyyy"`. You can use any format supported by [date-fns](https://date-fns.org/v2.28.0/docs/format).
- **`showPresent`** (`boolean`): A flag to determine whether to display "Present" if no end date is provided. This is optional and defaults to `true`.
- **`className`** (`string`): An optional className string for adding custom styling to the component.

## Returns

The component returns a `div` element containing the formatted start and/or end dates. It includes a dash (`-`) between the dates if both are provided or if only the start date is provided with `showPresent` set to `true`.

## Usage

### Basic Usage

```typescript
import DateRange from "@/app/components/DateRange";

// Using only start date
<DateRange start="2023-01-01" />
```

### Using Both Start and End Dates

```typescript
import DateRange from "@/app/components/DateRange";

// Using both start and end date
<DateRange start="2023-01-01" end="2024-01-01" />
```

### Custom Format

```typescript
import DateRange from "@/app/components/DateRange";

// Custom date format
<DateRange
  start="2023-01-01"
  end="2024-01-01"
  format="dd/MM/yyyy"
/>
```

### Show "Present" for Ongoing Dates

```typescript
import DateRange from "@/app/components/DateRange";

// Show "Present" for ongoing dates
<DateRange start="2023-01-01" showPresent={true} />
```

### No Dash for Ongoing Dates

```typescript
import DateRange from "@/app/components/DateRange";

// No dash and no "Present" if only start date is provided
<DateRange start="2023-01-01" showPresent={false} />
```

## Notes

**Formatting**: The `format` string follows the syntax provided by [date-fns](https://date-fns.org/v2.28.0/docs/format). You can customize it based on your requirements.

The `date-fns` can format dates in various ways depending on the format string provided. Some common format options include:

- **"MMM yyyy"**: Formats as "Jan 2023"
- **"MM/yyyy"**: Formats as "01/2023"
- **"dd/MM/yyyy"**: Formats as "01/01/2023"
- **"yyyy-MM-dd"**: Formats as "2023-01-01"
- **"MMMM dd, yyyy"**: Formats as "January 01, 2023"
- **"EEE, MMM d, yyyy"**: Formats as "Sat, Jan 1, 2023"
- **"hh:mm a"**: Formats as "12:00 PM"

Refer to the [date-fns format documentation](https://date-fns.org/v2.28.0/docs/format) for a comprehensive list of format options.

**Required Start or End**: The component ensures that at least one of the `start` or `end` dates is provided, preventing scenarios where both are missing.

**Optional ClassName**: You can pass a `className` prop to apply additional styling to the component.
