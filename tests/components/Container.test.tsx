import { Container } from '../../src/components/Container';
import { render } from '@testing-library/react'
    
describe('<Container>', ()=>{
        
    it('should render component', ()=>{
        const { container } = render(
            <Container>
                <p>test</p>
            </Container>
        );

        expect(container).toBeInTheDocument();
    });
    
});