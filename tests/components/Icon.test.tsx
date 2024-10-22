import { Icon } from '../../src/components/Icon';
import { render, screen } from '@testing-library/react'
import { IIconProps } from '@/models';


    
describe('<Container>', ()=>{

    window.matchMedia = jest.fn().mockImplementation(query => {
        return {
            matches: true,
            media: query,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    });

    const defaultProps:IIconProps = {
        src: 'test',
        width: 20,
        height: 20,
        alt: 'test'
    }
        
    it('should render component', ()=>{
        const { container } = render(
            <Icon {...defaultProps} />
        );
        
        expect(container).toBeInTheDocument();
    });
    
    it('Should match media', ()=>{
        render(
            <Icon {...defaultProps} />
        );

        const img = screen.getByRole('img');

        expect(img.getAttribute('width')).toBe("20");
        expect(img.getAttribute('height')).toBe("20");
    });
    
});