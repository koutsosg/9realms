# `formatDate` Utility Function

The `formatDate` function formats a given date string into a specified format. It uses the `date-fns` library for formatting dates. This function ensures that invalid or missing dates are handled gracefully.

## Function Signature

```typescript
import { format } from "date-fns";

export const formatDate = (
  dateString: string, // Required date string
  type: string = "MMM yyyy", // Optional format string (default is "MMM yyyy")
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
```

## Parameters

- `dateString` (`string`): The date string to be formatted. This parameter is required. If the string is empty or not provided, the function will return an empty string.
- `type` (`string`): The format of the date. This parameter is optional. If not provided, it defaults to `"MMM yyyy"`. You can specify any format supported by [date-fns](https://date-fns.org/v2.28.0/docs/format).

## Returns

- A formatted date string according to the specified format. If the date string is invalid or cannot be parsed, the function returns `"n/a"`. If no date string is provided, it returns an empty string.

## Usage

### Basic Usage

```typescript
import { formatDate } from "@/app/lib/utils/dateUtils";

const formattedDate = formatDate("2023-01-01"); // "Jan 2023"
console.log(formattedDate);
```

### Custom Format

```typescript
import { formatDate } from "@/app/lib/utils/dateUtils";

const formattedDate = formatDate("2023-01-01", "dd/MM/yyyy"); // "01/01/2023"
console.log(formattedDate);
```

### Handling Empty Date String

```typescript
import { formatDate } from "@/app/lib/utils/dateUtils";

const formattedDate = formatDate(""); // ""
console.log(formattedDate);
```

### Handling Invalid Date String

```typescript
import { formatDate } from "@/app/lib/utils/dateUtils";

const formattedDate = formatDate("invalid-date"); // "n/a"
console.log(formattedDate);
```

## Possibilities

The `formatDate` function can format dates in various ways depending on the format string provided. Some common format options include:

- **"MMM yyyy"**: Formats as "Jan 2023"
- **"MM/yyyy"**: Formats as "01/2023"
- **"dd/MM/yyyy"**: Formats as "01/01/2023"
- **"yyyy-MM-dd"**: Formats as "2023-01-01"
- **"MMMM dd, yyyy"**: Formats as "January 01, 2023"
- **"EEE, MMM d, yyyy"**: Formats as "Sat, Jan 1, 2023"
- **"hh:mm a"**: Formats as "12:00 PM"

Refer to the [date-fns format documentation](https://date-fns.org/v2.28.0/docs/format) for a comprehensive list of format options.

## Notes

- Ensure that `date-fns` is installed in your project to use the `format` function.
- The format string `type` follows the [date-fns format syntax](https://date-fns.org/v2.28.0/docs/format), which allows you to tailor the output according to your needs.

For more information on format strings and date formatting options, refer to the [date-fns documentation](https://date-fns.org/v2.28.0/docs/format).
