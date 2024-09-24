# Positioner Component Documentation

## Overview

The `Positioner` component allows you to position a button and optional content in various positions of the viewport. The content can be toggleable, appearing when the button is clicked.

## Props

### `position`

- **Type**: `string`
- **Default**: `"top-right"`
- **Description**: Specifies the position where the button and content will be positioned. Acceptable values:
  - `"top-left"`
  - `"top-right"`
  - `"bottom-left"`
  - `"bottom-right"`
  - `"top-middle"`
  - `"bottom-middle"`
  - `"left-middle"`
  - `"right-middle"`

### `toggleable`

- **Type**: `boolean`
- **Default**: `false`
- **Description**: If set to `true`, the button will toggle the visibility of the following content.

### `buttonProps`

- **Type**: `React.ComponentProps<typeof Button>`
- **Description**: Props to pass to the internal `Button` component. This allows you to customize the button's appearance and behavior.

### `children`

- **Type**: `ReactNode`
- **Description**: The content to be rendered. If `toggleable` is `true`, the button will be displayed followed by the content to be shown/hidden.

### `extraClasses`

- **Type**: `string`
- **Default**: `""`
- **Description**: Additional custom classes to apply to the positioner.

### `buttonLabel`

- **Type**: `string`
- **Default**: `"toggle"`
- **Description**: The label for the button when the button is toggleable.

## Styling the Button

You can customize the button appearance by passing any valid props that your `Button` component accepts through the `buttonProps` prop. For instance:

- **Variant**: Change the visual style of the button (e.g., "primary", "secondary").
- **Size**: Adjust the size of the button (e.g., "small", "medium", "large").
- **Extra Classes**: Add additional custom CSS classes for further styling.
- Check Button’s component documentation [Here](./app/components/Button/README.md) for all button props.

## Example Usage

### Basic Usage

To use the `Positioner` component, simply import it and provide the required props.

```tsx
import Positioner from "./components/Positioner";

const App = () => {
  return (
    <div className="relative h-screen w-screen">
      <Positioner position="bottom-right">
        <div className="rounded bg-blue-500 p-2 text-white">
          Always Visible Content
        </div>
      </Positioner>
    </div>
  );
};

export default App;
```

### Toggleable Usage

You can make the content toggleable by passing a button as the first child.

```tsx
import Positioner from "./components/Positioner";
import Button from "./components/Button/Button"; // Your custom button component

const App = () => {
  return (
    <div className="relative h-screen w-screen">
      <Positioner position="top-left" toggleable buttonLabel="Open Menu">
        <div className="rounded bg-red-500 p-2 text-white">
          Hidden Menu Content
        </div>
      </Positioner>
    </div>
  );
};

export default App;
```

## Styling

You can pass additional classes through the `extraClasses` prop to customize the appearance of the positioner.

```tsx
<Positioner position="bottom-right" extraClasses="custom-class">
  {/* Your content here */}
</Positioner>
```

## Conclusion

The `Positioner` component is a versatile tool for creating easily toggleable UI elements that can be placed anywhere in the viewport. Adjust the `position`, `toggleable`, `buttonProps`, and `buttonLabel` props to fit your layout needs.
