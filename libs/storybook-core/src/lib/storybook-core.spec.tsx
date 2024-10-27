import { render } from '@testing-library/react';

import StorybookCore from './storybook-core';

describe('StorybookCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookCore />);
    expect(baseElement).toBeTruthy();
  });
});
