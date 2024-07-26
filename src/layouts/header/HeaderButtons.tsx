import { Button } from '../../components';
import { useHeader } from '../../store/';

const HeaderButtons = ():JSX.Element => {

    const { hamburger, setHamburger } = useHeader(state => state);

    console.log(hamburger);

    return (
        <div className="header__buttons">
            <Button 
                className='btn--primary h-text'
                Text={ `LET'S TALK` }
                HoverText='Do it'
                onClick={ ()=>{
                    console.log('hola');
                } }
            />
            <Button 
                className={`btn--secondary btn--hover-dot ${hamburger ? 'active' : ''}`}
                Text='MENU'
                HoverText='CLOSE'
                onClick={ () => setHamburger(!hamburger) }
            />
        </div>
    )
}

export { HeaderButtons }