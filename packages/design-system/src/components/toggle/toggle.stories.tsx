import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Toggle } from './index';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toggle component that can be used in both controlled and uncontrolled modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled state of the toggle',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default state for uncontrolled mode',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when toggle state changes',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    // Test initial state
    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();

    // Test clicking
    await userEvent.click(toggle);
    expect(toggle).toBeChecked();
    expect(args.onChange).toHaveBeenCalledWith(expect.any(Object));

    // Test clicking again
    await userEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    label: 'Pre-checked toggle',
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    expect(toggle).toBeChecked();
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked toggle',
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    expect(toggle).not.toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    expect(toggle).toBeDisabled();

    // Test that clicking doesn't change state
    const initialState = toggle.checked;
    await userEvent.click(toggle);
    expect(toggle.checked).toBe(initialState);
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Toggle with custom label',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if label is present
    const label = canvas.getByText('Toggle with custom label');
    expect(label).toBeInTheDocument();

    // Check if toggle is associated with label
    const toggle = canvas.getByRole('checkbox');
    expect(toggle).toHaveAttribute('aria-label', 'Toggle with custom label');
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled toggle',
    checked: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    // Test controlled behavior
    expect(toggle).not.toBeChecked();

    // Click should trigger onChange but not change visual state
    await userEvent.click(toggle);
    expect(args.onChange).toHaveBeenCalledWith(expect.any(Object));
    // In controlled mode, the visual state depends on the parent component
  },
};

// Example using step function for complex interactions
export const ComplexInteraction: Story = {
  args: {
    label: 'Complex toggle',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');

    await step('Initial state verification', async () => {
      expect(toggle).toBeInTheDocument();
      expect(toggle).not.toBeChecked();
    });

    await step('Toggle interaction', async () => {
      await userEvent.click(toggle);
      expect(toggle).toBeChecked();
    });

    await step('Toggle back', async () => {
      await userEvent.click(toggle);
      expect(toggle).not.toBeChecked();
    });
  },
};
