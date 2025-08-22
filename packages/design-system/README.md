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
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'

### Input
- Standard HTML input props
- Built-in validation styles

### Dialog
- Modal dialog component
- Built-in backdrop and focus management

### Select
- Dropdown select component
- Custom styling support

### Header
- Application header component
- Navigation and branding support

## Development

```bash
# Build the package
yarn build

# Run Storybook
yarn storybook

# Type checking
yarn check-types

# Linting
yarn lint
```

## Styling

The design system uses Tailwind CSS for styling. Import the styles in your application:

```tsx
import '@hfsa/design-system/styles';
```