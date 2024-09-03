ertainly! Here’s the documentation formatted in Markdown:

markdown
Copy code

# Button Component Documentation

## Overview

The `Button` component is a reusable UI element designed to be flexible and easy to integrate into your projects. It supports various styles, sizes, loading states, and includes an integrated spinner for visual feedback during asynchronous operations.

## Importing the Button Component

To use the `Button` component in your project, you need to import it into your desired file:

```typescript
import Button from "@/app/components/primaryButton/Button";
Basic Usage
Here’s a simple example of how to use the Button component:

tsx
Copy code
<Button>Click Me</Button>
This will render a button with the default styling (primary variant, medium size).

Props
The Button component supports several props to customize its behavior and appearance:

variant: Defines the style variant of the button. It accepts one of the following values:

"primary": Default style, with a blue background.
"secondary": Grey background.
"danger": Red background.
tsx
Copy code
<Button variant="danger">Delete</Button>
size: Defines the size of the button. It accepts one of the following values:

"small"
"medium" (default)
"large"
tsx
Copy code
<Button size="large">Large Button</Button>
isLoading: A boolean prop that, when true, shows a loading spinner instead of the button content.

tsx
Copy code
<Button isLoading>Loading...</Button>
loadingText: A string that is announced to screen readers while the button is loading. This text will not be visible but helps with accessibility.

tsx
Copy code
<Button isLoading loadingText="Submitting...">Submit</Button>
className: Allows you to add custom CSS classes to the button for additional styling.

tsx
Copy code
<Button className="bg-green-500">Custom Button</Button>
spinnerClasses: Allows you to pass additional classes to the spinner when the button is in a loading state.

tsx
Copy code
<Button isLoading spinnerClasses="text-black">Loading...</Button>
Advanced Usage
Here’s a more advanced example where the button is used with a loading state and a custom spinner:

tsx
Copy code
<Button
  variant="secondary"
  size="large"
  isLoading
  spinnerClasses="border-blue-500"
>
  Submit
</Button>
In this example:

The button is rendered with the secondary variant and large size.
When isLoading is true, a spinner with a custom blue border color is displayed instead of the text.
Spinner Customization
The integrated Spinner component within the Button can also be used independently or customized through its own props:

size: Defines the size of the spinner. It can be "small", "medium", or "large".
color: Sets the top border color of the spinner. This is the visible part of the spinner.
Example of a standalone spinner:

tsx
Copy code
import Spinner from "@/app/components/spinner/Spinner";

<Spinner size="small" color="#FF0000" />;
This will render a small spinner with a red top border.

Accessibility
The Button component includes accessibility features such as the sr-only class for screen readers when the button is in a loading state. Ensure that you provide a meaningful loadingText when using isLoading.

Conclusion
The Button component is versatile and designed to be easily integrated into various parts of your application. By customizing its props, you can adapt it to fit different design requirements and use cases.

csharp
Copy code

You can copy and paste this Markdown content into your project's documentation or README file.
```
