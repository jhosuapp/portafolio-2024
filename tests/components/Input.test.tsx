import { render, screen } from '@testing-library/react'
import { Input } from '../../src/components/Input'; 

describe('<Input>', ()=>{
        
    it('should render component', ()=>{
        const { container } = render(<Input />);

        expect(container).toBeInTheDocument();
    });

    it('should render component with error message', ()=>{
        render(<Input errorMessage={'error'} />);

        const errorMessage = screen.getByText('error');

        expect(errorMessage).toBeInTheDocument();
    });
    
});