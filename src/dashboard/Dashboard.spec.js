// Test away
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard'


test('dashbord renders without crashing', ()=>{
    render(<Dashboard/>)
})

test('unlocked displays when gate is unlocked', () => {
    const container = render(<Dashboard/>)
    if (container.getByText(/Lock Gate/i)) {
        container.getByText(/unlocked/i);
    }
});

