// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls'

test('controlls renders without crashing', ()=>{
    render(<Controls/>)
})