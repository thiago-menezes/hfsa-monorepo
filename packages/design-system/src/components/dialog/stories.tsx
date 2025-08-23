import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './index';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <div>
        <p>This is the dialog content.</p>
        <p>Click outside or press ESC to close.</p>
      </div>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    open: true,
    title: 'Confirmation Dialog',
    children: (
      <div>
        <p>Are you sure you want to delete this item?</p>
        <div className="flex gap-2 mt-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Delete
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
        </div>
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: 'This dialog is closed',
    children: <p>You should not see this content.</p>,
  },
};
