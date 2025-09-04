import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dialog } from '.';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: 'This is a dialog content.',
  },
};

export const WithTitle: Story = {
  args: {
    open: true,
    title: 'Dialog Title',
    children: 'This is a dialog with a title.',
  },
};

export const LongContent: Story = {
  args: {
    open: true,
    title: 'Long Content Dialog',
    children: (
      <div>
        <p>
          This is a dialog with longer content to demonstrate how it handles
          overflow.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: 'Closed Dialog',
    children: 'This dialog is closed and should not be visible.',
  },
};
