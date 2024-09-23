# Positioner Component Documentation

## Overview

The `Positioner` component allows you to position a button and optional content in various corners of the viewport. The content can be toggleable, appearing when the button is clicked.

## Props

### `corner`

- **Type**: `string`
- **Default**: `"top-right"`
- **Description**: Specifies the corner where the button and content will be positioned. Acceptable values:
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
- **Description**: If set to `true`, the first child will be treated as a button that toggles the visibility of the following content.

### `children`

- **Type**: `ReactNode`
- **Description**: The content to be rendered. If `toggleable` is `true`, the first child should be a button, followed by the content to be displayed.

### `extraClasses`

- **Type**: `string`
- **Default**: `""`
- **Description**: Additional custom classes to apply to the positioner.

## Example Usage

### Basic Usage

To use the `Positioner` component, simply import it and provide the required props.

```tsx
import Positioner from "./components/Positioner";

const App = () => {
  return (
    <div className="relative h-screen w-screen">
      <Positioner corner="bottom-right">
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
      <Positioner corner="top-left" toggleable>
        <Button size="medium" variant="primary">
          Open Menu
        </Button>
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
<Positioner corner="bottom-right" extraClasses="custom-class">
  {/* Your content here */}
</Positioner>
```

## Conclusion

The `Positioner` component is a versatile tool for creating easily toggleable UI elements that can be placed anywhere in the viewport. Adjust the `corner` and `toggleable` props to fit your layout needs.
