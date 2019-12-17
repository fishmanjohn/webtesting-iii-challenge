// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display'

test('display renders without crashing',()=>{
render(<Display/>);
})