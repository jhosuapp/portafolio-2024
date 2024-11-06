import { render, } from '@testing-library/react'
import { ProgressBar } from '../../src/components/ProgressBar'; 

describe('<ProgressBar>', ()=>{

    it('should render component', ()=>{
        const { container } = render(<ProgressBar />);

        expect(container).toBeInTheDocument();
    });
    
});