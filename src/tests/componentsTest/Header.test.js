import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
    test('renders search bar', () => {
        render(<Header />);
        const searchBar = screen.getByRole('searchbox');
        expect(searchBar).toBeInTheDocument();
    });

});
