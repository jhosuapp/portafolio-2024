import { render, fireEvent } from '@testing-library/react'
import { Modal } from '../../src/components/Modal'; 

//Inital values
const mockDispatch = jest.fn();

//Mock react-redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

describe('<Modal>', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });

    const defaultProps = {
        errorMessage:'error'
    }
        
    it('should render component empty because dont exists portal', ()=>{
        render(<Modal  {...defaultProps} />);

        const modal = document.querySelector('.modal');

        expect(modal).toBeFalsy();
    });
    
    it('should render component with modal because portal exists', ()=>{

        const div = document.createElement('div');
        div.setAttribute('id', 'portal-modal');
        document.body.append(div);

        const { container } = render(<Modal  {...defaultProps} />);

        const modal = document.querySelector('.modal');

        expect(modal).toBeInTheDocument();
        expect(container).toBeInTheDocument();
    });

    it('should simulate click event', ()=>{

        const div = document.createElement('div');
        div.setAttribute('id', 'portal-modal');
        document.body.append(div);

        render(<Modal  {...defaultProps} />);

        const button = document.querySelector('button');

        fireEvent.click(button as HTMLButtonElement);

        expect(mockDispatch).toHaveBeenCalled();
    });
    
});