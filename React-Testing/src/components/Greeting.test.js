import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', ()=>{
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        //Assert
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "its good to see you" if the button was NOT clicked', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const textElement = screen.getByText('its good to see you', {exact: false});
        //Assert
        expect(textElement).toBeInTheDocument();
    });

    test('renders "Changed" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const textElement = screen.getByText('Changed', {exact: false});
        expect(textElement).toBeInTheDocument();
    });

    test('removes "its good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);
        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const textElement = screen.queryByText("its good to see you", {exact: false});
        expect(textElement).toBeNull();
    });
});


