# LinkC Component Documentation

The `LinkC` component is a reusable and flexible link component that handles internal, external, `mailto:`, and `tel:` links, and allows adding custom classes for styling.

## Props

### `href: string`

The URL or link that the anchor element will point to. It can be a normal URL, a `mailto:`, or a `tel:` link.

### `children?: React.ReactNode` (optional)

Content to be displayed inside the link. If no children are provided:

- For `mailto:` and `tel:`, the component will render `:<email>` or `:<phone>` as the content.
- For other links, it will render the `href` as the content.

### `external?: boolean` (optional)

- If `true`, the link will open in a new tab (`target="_blank"`) and have `rel="noopener noreferrer"` for security.
- By default, `external` is `false`.

### `className?: string` (optional)

An optional string for applying custom classes (e.g., Tailwind CSS or regular CSS classes) to the `<a>` element.

## How It Works

- **Internal Links**: If `external` is not specified or set to `false`, the link behaves normally.
- **External Links**: If `external` is set to `true`, the link opens in a new tab with the appropriate `rel` attributes for security.
- **`mailto:` and `tel:` Links**: If the `href` starts with `mailto:` or `tel:`, the component will render `:<email>` or `:<phone>` as the content when no children are provided.

## Example Usages

### 1. Basic Internal Link

```jsx
import LinkC from "./LinkC";

export default function Example() {
  return (
    <LinkC href="/about" className="text-blue-500">
      Go to About Page
    </LinkC>
  );
}
```

This will render a link to `/about` with the text "Go to About Page" and apply the `text-blue-500` class.

### 2. External Link with Custom Class

```jsx
import LinkC from "./LinkC";

export default function Example() {
  return (
    <LinkC href="https://example.com" external className="text-red-500">
      Visit Example Website
    </LinkC>
  );
}
```

This will render an external link that opens in a new tab, with the text "Visit Example Website", and applies the `text-red-500` class.

### 3. `mailto:` Link Without Children

```jsx
import LinkC from "./LinkC";

export default function Example() {
  return <LinkC href="mailto:someone@example.com" />;
}
```

This will render the link as:

```html
<a href="mailto:someone@example.com">someone@example.com</a>
```

### 4. `tel:` Link Without Children

```jsx
import LinkC from "./LinkC";

export default function Example() {
  return <LinkC href="tel:+1234567890" />;
}
```

This will render the link as:

```html
<a href="tel:+1234567890">+1234567890</a>
```

### 5. External Link Without Children

```jsx
import LinkC from "./LinkC";

export default function Example() {
  return <LinkC href="https://example.com" external />;
}
```

This will render the link as:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer"
  >https://example.com</a
>
```

## Importing and Using the Component

To use the `LinkC` component in your Next.js or React project, import it like this:

```jsx
import LinkC from "./LinkC";
```

Then, you can use it anywhere in your app with the provided props.
