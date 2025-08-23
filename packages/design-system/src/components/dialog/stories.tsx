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
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#dc2626', 
            color: 'white', 
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }}>
            Delete
          </button>
          <button style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#d1d5db', 
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer'
          }}>Cancel</button>
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
