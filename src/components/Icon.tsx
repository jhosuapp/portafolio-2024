import { IIconProps } from '@/models';
import { useMediaQuery } from '@/hooks';

const Icon = ({ src, width, height, alt }:IIconProps ):JSX.Element => {

    const isDesk = useMediaQuery({ breakpoint: 991 });

    return (
        <img 
            src={ src } 
            alt={ alt } 
            width={ isDesk ? width : ( width / 1.5 ) } 
            height={ isDesk ? height : ( width / 1.5 ) } 
        />
    )
}

export { Icon }