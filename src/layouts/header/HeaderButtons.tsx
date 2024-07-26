import { Button } from '../../components';

const HeaderButtons = ():JSX.Element => {
    return (
        <div className="header__buttons">
            <Button 
                className='btn--primary'
                Text='Test'
                HoverText='test 2'
                onClick={ ()=>{
                    console.log('hola');
                } }
            />
            <Button 
                className='btn--primary'
                Text='Test'
                HoverText='test 2'
            />
        </div>
    )
}

export { HeaderButtons }