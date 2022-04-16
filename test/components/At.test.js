/**
 * @jest-environment jsdom
 */

import At from '../../src/components/At';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';


it('renders properly', () => {
    render(
        <Router>
            <At href="/">Hello</At>
        </Router>
    )

    expect(screen.getByRole('link').href).toBe('http://localhost/')
    expect(screen.getByRole('link').textContent).toBe('Hello')
})
