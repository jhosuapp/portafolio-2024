import { render, screen, fireEvent } from '@testing-library/react'
import { Settings } from '../../src/components/Settings'; 
import { useAppSelector } from '../../src/hooks/Redux/useRedux';

//Mock useAppSelector
jest.mock('../../src/hooks/Redux/useRedux');

//Mock react-redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch:jest.fn(),
}));

//Mock matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
        matches: false,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
});

describe('<Settings>', ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
        (useAppSelector as jest.Mock).mockReturnValue({
            modes: {}
        });
    });

    it('should render component', ()=>{
        const { container } = render(<Settings />);

        expect(container).toBeInTheDocument();
    });

    it('should render component with animation for mobile', ()=>{
        window.matchMedia = jest.fn().mockImplementation((query) => {
            return {
                matches: true,
                media: query,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });
        const { container } = render(<Settings />);

        expect(container).toBeInTheDocument();
    });

    it('should simulate handleClick', ()=>{
        render(<Settings />);

        const article = screen.getByTestId('handle-event');
        const section = document.querySelector('section');

        fireEvent.click(article);

        expect(section?.classList.contains('open')).toBeTruthy();
    });
    
});