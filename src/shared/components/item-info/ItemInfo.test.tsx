import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { mock } from 'jest-mock-extended';

import ItemInfo from './ItemInfo';
import { Show } from 'shared/types/interfaces/show';

test('renders show info correctly if we pass show object as a prop', () => {
    const show = mock<Show>();
    show.name = 'Great show';
    show.summary = 'This is an amazing show';
    
    const { container } = render(<ItemInfo item={show} />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Great show/i)).toBeInTheDocument();
    expect(screen.getByText(/This is an amazing show/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
});