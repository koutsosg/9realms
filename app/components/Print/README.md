# PrintComponent Documentation

## Overview

The `PrintComponent` is a reusable React component designed to enable printing specific parts of a webpage without the clutter of headers or footers. It leverages the `react-to-print` library to facilitate printing and can be customized to fit various button styles.

## Features

- **Reusable Component**: Easily integrate into any part of your application.
- **Customizable Button**: Pass props to style the button as needed.
- **Content Control**: Specify the content you want to print.

## Props

### `PrintComponent`

| Prop          | Type                                  | Description                                                                                  |
| ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| `buttonLabel` | `string`                              | The label text for the button that triggers the print action.                                |
| `buttonProps` | `React.ComponentProps<typeof Button>` | Additional properties that can be passed to the `Button` component (e.g., styles, variants). |
| `children`    | `React.ReactNode`                     | The content that will be rendered and printed.                                               |

### Example Usage

Here's an example of how to use the `PrintComponent`:

```tsx
import PrintComponent from "@/app/components/PrintComponent";

const YourComponent = () => {
  return (
    <PrintComponent
      buttonLabel="Print CV"
      buttonProps={{
        variant: "primary",
        size: "medium",
        extraClasses: "fixed left-2/4 top-0",
      }}
    >
      {/* Your content here to be printed */}
      <div>Your CV Content</div>
    </PrintComponent>
  );
};
```

## Styling the Button

You can customize the button appearance by passing any valid props that your `Button` component accepts through the `buttonProps` prop. For instance:

- Variant: Change the visual style of the button (e.g., "primary", "secondary").
- Size: Adjust the size of the button (e.g., "small", "medium", "large").
- Extra Classes: Add additional custom CSS classes for further styling.
- Check Button`s component documentation [Here](./app/components/Button/README.md) for all button props.

## Notes

- Ensure you have the `react-to-print` library installed in your project to use this component.
- The printed output will only include the specified children without any headers or footers.
- You can customize the print settings further in the `useReactToPrint` hook if needed.

## Conclusion

The `PrintComponent` simplifies the process of printing specific content from your React application. By leveraging props, you can customize the button's appearance and functionality to fit your design needs.
