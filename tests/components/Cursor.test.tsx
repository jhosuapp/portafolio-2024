import { render, screen, fireEvent } from '@testing-library/react'
import { Cursor } from '../../src/components/Cursor';
    
describe('<Cursor>', ()=>{
        
    it('should render component', ()=>{
        const { container } = render(<Cursor />);
        expect(container).toBeInTheDocument();
    });

    it("should update cursor position on mousemove", () => {

        render(<Cursor />);

        const cursorElement = screen.getByTestId("cursor-element");

        fireEvent.mouseMove(document.body, { clientX: 0, clientY: 0 });

        expect(cursorElement).toHaveStyle({
            left: "0",
            top: "0",
        });
    });
    
});