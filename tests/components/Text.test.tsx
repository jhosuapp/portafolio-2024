import { render, screen } from '@testing-library/react'
import { Text } from '../../src/components/Text'; 

describe('<Text>', ()=>{

    it('should render component', ()=>{
        const { container } = render(
            <Text>
                test
            </Text>
        );
        
        expect(container).toBeInTheDocument();
    });

    it('should render component how h1', ()=>{
        render(
            <Text headingType='h1'>
                test
            </Text>
        );

        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeInTheDocument();
    });

    it('should render component how h2', ()=>{
        render(
            <Text headingType='h2'>
                test
            </Text>
        );

        const h2 = screen.getByRole('heading', { level: 2 });
        expect(h2).toBeInTheDocument();
    });

    it('should render component how h3', ()=>{
        render(
            <Text headingType='h3'>
                test
            </Text>
        );

        const h3 = screen.getByRole('heading', { level: 3 });
        expect(h3).toBeInTheDocument();
    });

    it('should render component how h4', ()=>{
        render(
            <Text headingType='h4'>
                test
            </Text>
        );

        const h4 = screen.getByRole('heading', { level: 4 });
        expect(h4).toBeInTheDocument();
    });

    it('should render component how h5', ()=>{
        render(
            <Text headingType='h5'>
                test
            </Text>
        );

        const h5 = screen.getByRole('heading', { level: 5 });
        expect(h5).toBeInTheDocument();
    });

    it('should render component how h6', ()=>{
        render(
            <Text headingType='h6'>
                test
            </Text>
        );

        const h6 = screen.getByRole('heading', { level: 6 });
        expect(h6).toBeInTheDocument();
    });
    
});