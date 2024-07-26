import { Button } from '../../components';

const HeaderButtons = ():JSX.Element => {
    return (
        <div className="header__buttons">
            <Button 
                className='btn--primary btn--hover'
                Text={ `LET'S TALK` }
                HoverText='Do it'
                onClick={ ()=>{
                    console.log('hola');
                } }
            />
            <Button 
                className='btn--secondary btn--hover-dot'
                Text='MENU'
                HoverText='CLOSE'
            />
        </div>
    )
}

export { HeaderButtons }