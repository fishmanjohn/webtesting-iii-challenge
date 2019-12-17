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

test('open displays when gate is open', ()=>{
    const gate = render(<Dashboard/>)
    if(gate.getByText(/Close Gate/i)){
        gate.getByText(/Open/i)
    }
})

test('lock button changes on click', ()=>{
    const {getByTestId} = render(<Dashboard/>)
    //const button = getByTestId(/buttonOne/i)
    fireEvent.click(getByTestId(/buttonOne/i))
    
   })

   test('Gate open changes on click', ()=>{
       const {getByTestId} = render(<Dashboard/>)
       fireEvent.click(getByTestId(/buttonTwo/i))
   })