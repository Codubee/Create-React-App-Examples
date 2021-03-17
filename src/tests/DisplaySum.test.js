import React from 'react'
import {fireEvent, render,screen} from '@testing-library/react'
import DisplaySum from '../components/DisplaySum'

/* This is a simple smoke test to make sure our application starts
    up correctly
*/ 

//Describe what your test is going to do
test('application starts up correctly',()=>{
    //Load up the component you want to test
    render(<DisplaySum/>)

    //Find the html elements by searching for the text inside of them
    const value = screen.getByText('0');
    const button = screen.getByText('Add');

    // Make assertions that check if the html elements
    // are on the webpage
    expect(value).toBeInTheDocument();
    expect(button).toBeInTheDocument();

})

//Describe what your test is going to do
test('displays the correct value after a button click',()=>{
    //Load up the component you want to test
    render(<DisplaySum/>)

    //Simulate a button click
    fireEvent.click(screen.getByText('Add'))

    //The text on the screen should be a 1 since we added
    //1 to the value in the DisplaySum component
    const element = screen.getByText('1');

    //Make an assertion to check if the html element
    //found in the previous step is in the document
    expect(element).toBeInTheDocument();
})