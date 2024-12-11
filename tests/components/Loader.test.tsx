import { render } from '@testing-library/react'
import { Loader } from '../../src/components/Loader'; 

//Inital values
const mockDispatch = jest.fn();

//Mock react-redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

describe('<Loader>', ()=>{
        
    const defaultProps = {
        counter: 100,
    }

    it('should render component', ()=>{
        const { container } = render(<Loader {...defaultProps} />);

        expect(container).toBeInTheDocument();
    });
    
});