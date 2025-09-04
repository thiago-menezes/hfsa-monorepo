import { render, screen } from '@testing-library/react';

import { Dialog } from '.';

describe('Dialog', () => {
  it('renders when open', () => {
    render(
      <Dialog open onClose={() => {}} title="Hello">
        Content
      </Dialog>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
