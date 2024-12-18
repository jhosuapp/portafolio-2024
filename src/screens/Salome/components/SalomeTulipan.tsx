import Icon from '/assets/img/tulipan.svg';

export type ICustomPropsSalomeTulipan = {
    left: string;
}

const SalomeTulipan = ({ left }:ICustomPropsSalomeTulipan):JSX.Element => {
    return (
        <img 
            className="salome-tulipan" 
            style={{ left: left }}
            src={ Icon } 
        />
    )
}

export { SalomeTulipan }