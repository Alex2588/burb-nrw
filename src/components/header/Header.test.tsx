import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders show-item component', async () => {
    const { container} = render(<Header />, { wrapper: MemoryRouter });

    expect(screen.getByText('SHOWS')).toHaveAttribute('href', '/shows');
    expect(container.firstChild).toMatchSnapshot();
});