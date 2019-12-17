// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display'

test('display renders without crashing',()=>{
render(<Display/>);
})

test('gate is unlocked when app starts',()=>{
    const {getByText} = render(<Display/>) 
    getByText(/Unlocked/i)
} );

test('gate is open when app starts', ()=>{
    const {getByText} = render(<Display/>) 
    getByText(/Open/i)
})