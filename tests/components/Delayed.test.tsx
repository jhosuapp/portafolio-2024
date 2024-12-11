import { render, screen } from '@testing-library/react'
import { Delayed } from '../../src/components/Delayed';
import { useAppSelector } from '../../src/hooks/Redux/useRedux';


//Inital values
const mockDispatch = jest.fn();

//UseAppSelector mock
jest.mock('../../src/hooks/Redux/useRedux');

//Mock react-redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));
    
describe('<Delayed>', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();

        (useAppSelector as jest.Mock).mockReturnValue({
                delay: 1000
        });
    });
        
    it('should render component', ()=>{
        jest.useFakeTimers();

        render(
            <Delayed>
                <p>test</p>
            </Delayed>
        );

        expect(screen.queryByText('test')).not.toBeInTheDocument();

        jest.advanceTimersByTime(1100);

        jest.useRealTimers();
    });
    
});