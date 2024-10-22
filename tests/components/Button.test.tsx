import '@testing-library/jest-dom';
import { Button } from '@/components/Button';
import { IButtonProps } from '@/models';
import { render, screen, fireEvent } from '@testing-library/react';

    
describe('<Button>', ()=>{
        
    const defaultProps:IButtonProps = {
        Text: 'test',
        HoverText: 'testHover',
        className: 'test',
    }

    it('should render button', ()=>{
        const { container } = render(
            <Button {...defaultProps} />
        );

        expect(container).toBeInTheDocument();
    });
    
});
