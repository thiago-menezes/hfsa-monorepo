import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Toggle } from './index';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Toggle',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Toggle',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Toggle',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle without visible label',
  },
};

export const DefaultChecked: Story = {
  args: {
    label: 'Default Checked',
    defaultChecked: true,
  },
};

export const LongLabel: Story = {
  args: {
    label:
      'This is a very long label that should wrap properly and not break the layout',
  },
};

export const AllStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Toggle label="Unchecked Toggle" checked={false} />
      <Toggle label="Checked Toggle" checked={true} />
      <Toggle label="Disabled Unchecked" disabled checked={false} />
      <Toggle label="Disabled Checked" disabled checked={true} />
      <Toggle label="Default Checked" defaultChecked />
    </div>
  ),
};
