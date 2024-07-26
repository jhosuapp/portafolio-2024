import { IMediaquery } from '../../models';
import { useEffect, useState } from "react";
  
const useMediaQuery = ({ breakpoint = 991, type = 'min-width' }: IMediaquery) => {
    const [ matches, setMatches ] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia(`(${type}: ${breakpoint}px)`);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [breakpoint, matches, type]);

    return matches;
};

export { useMediaQuery }
  