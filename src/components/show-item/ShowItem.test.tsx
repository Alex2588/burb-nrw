import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { mock } from 'jest-mock-extended';

import ShowItem from './ShowItem';
import { Show } from 'shared/types/interfaces/show';

test('renders show-item component', async () => {
    const show = mock<Show>();
    show.name = 'Amazing show';

    const { container } = render(<ShowItem show={show} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Amazing show/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
});

