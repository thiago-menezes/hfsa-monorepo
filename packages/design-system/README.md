# @hfsa/design-system

HFSA Design System - Reusable React components for the HFSA monorepo.

## Installation

```bash
yarn add @hfsa/design-system
```

## Usage

```tsx
import { Button, Input, Dialog } from '@hfsa/design-system';
import '@hfsa/design-system/styles';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

## Components

### Button

- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: ReactNode - Icon element to display
- `iconPosition`: 'left' | 'right' | 'only' - Position of icon relative to text
- `disabled`: boolean - Whether the button is disabled

### Dialog

- Modal dialog component
- Built-in backdrop and focus management

### Heading

- `as`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `size`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

### Input

- Standard HTML input props
- Built-in validation styles

### Select

- Dropdown select component
- Custom styling support

### Text

- `as`: 'p' | 'span' | 'div'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'inherit'

## Development

```bash
# Build the package
yarn build

# Type checking
yarn check-types

# Linting
yarn lint
```

## Styling

The design system uses CSS Modules with CSS custom properties (variables) for styling. Import the styles in your application:

```tsx
import '@hfsa/design-system/styles';
```

### Design Tokens

The design system includes a comprehensive set of design tokens available as CSS custom properties:

- **Colors**: Primary, secondary, and semantic color scales
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale from 0.25rem to 3rem
- **Border Radius**: Rounded corner utilities
- **Shadows**: Elevation and depth utilities
- **Transitions**: Consistent timing functions
- **Z-Index**: Layering system for modals, dropdowns, etc.

### CSS Modules

All components use CSS Modules for scoped styling. The class names follow BEM methodology:

```css
.button {
  /* Base button styles */
}
.button--primary {
  /* Primary variant */
}
.button--lg {
  /* Large size */
}
.button__icon {
  /* Icon element */
}
```
