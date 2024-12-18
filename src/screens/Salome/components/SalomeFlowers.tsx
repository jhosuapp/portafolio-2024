import { SalomeTulipan } from './SalomeTulipan';
import { SalomeHeart } from './SalomeHeart';
import { dummyHearts } from '../data/heart';
import { dummyFlowers } from '../data/flower';


const SalomeFlowers = ():JSX.Element => {
    return (
        <div className="container salome-flowers">
            {dummyFlowers.map((data, index)=> (
                <SalomeTulipan
                    key={ index }
                    left={ data.left }
                />
            ))}
            {dummyHearts.map((data, index)=>(
                <SalomeHeart 
                    key={ index }
                    width={ data.width }
                    height={ data.height }
                    top={ data.top }
                    left={ data.left }
                    animationDelay={ data.animationDelay }
                    transformRotate={ data.transformRotate }
                />
            ))}
        </div>
    )
}

export { SalomeFlowers }