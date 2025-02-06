import { useState } from "react";
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";
import { dummyDataIntrodution } from '../data/introduction';
import { Button } from "@/components";
//Audio
import soundTuyo from '/assets/audio/tuyo-mora.mp3';
//import { useAppSelector } from "@/hooks";


const SalomeIntroduction = ():JSX.Element => {
    const [isInView, setIsInView] = useState(false);
    const [initAnimation, setInitAnimation] = useState(false);
    //const { status } = useAppSelector(state => state.sound);
    //Handle click sound
    const hanldeClickSound = () => {
        setInitAnimation(true);
        const audio = new Audio(soundTuyo);
        audio.loop = true;
        audio.play();
    };
    //useEffect(()=>{
    //  status ? audio.plaY
    //},[status]);
    //Validate if portal exists
    const portalRoot = document.getElementById('portal-salome');
    if (!portalRoot) return <></>;

    return ReactDOM.createPortal(
        <motion.section 
            className={`salome-introduction ${isInView && initAnimation && "init-animation-salome"}`}
            onViewportEnter={() => setIsInView(true)} 
            onViewportLeave={() => setIsInView(false)}
            viewport={{ once: true, amount: 0.5 }} 
        >
            <article className="salome-introduction-preview">
                <p>¿Estás preparada mi niña?</p>
                <Button
                    Text="Dale click aquí para empezar"
                    HoverText={`Estoy lista`}
                    className="btn btn--secondary h-text"
                    onClick={ hanldeClickSound }
                />
            </article>
            {dummyDataIntrodution.map((data, index)=>(
                <article 
                    key={ index }
                    className={data.position}
                    style={{ 
                        transitionDelay: `${data.delay}s`, 
                        zIndex: data.index,
                        backgroundColor: data.background
                    }}
                >
                    <p>{ data.message }</p>
                </article>
            ))}
        </motion.section>,
        portalRoot
    )
}

export { SalomeIntroduction }