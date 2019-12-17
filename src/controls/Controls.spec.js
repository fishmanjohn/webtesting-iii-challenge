// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls'

test('controlls renders without crashing', ()=>{
    render(<Controls/>)
})

test('close gate button renders properly', ()=>{
const {getByText} = render(<Controls/>)
getByText(/Close Gate/i)
})

test('lock gate button renders properly', ()=>{
    const {getByText} = render(<Controls/>)
    getByText(/Lock Gate/i)
})