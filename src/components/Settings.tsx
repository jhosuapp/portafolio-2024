import { useState } from 'react';
import { motion } from 'framer-motion';
import { variantsSettingsContent, variantsSettingsBg, variantsSettingsContentMobile } from '@/variants';
import { useAppSelector, useMediaQuery } from '@/hooks';
import { Switch, Sound } from './';
//Audio
import menuOpen from '/assets/audio/menu-open-softer.mp3';
import menuClose from '/assets/audio/menu-close.mp3';

const Settings = ():JSX.Element => {

    const { status } = useAppSelector(state => state.sound);
    const isDesk = useMediaQuery({breakpoint: 991 });
    const [ settings, setSettings ] = useState<boolean>(false);

    const handleClick = ()=>{
        status && new Audio(settings ? menuClose : menuOpen).play();
        setSettings(!settings);
    }

    return (
        <motion.section 
            className={`settings ${settings ? 'open' : 'closed'}`}
            animate={settings ? "open" : "closed"}
        >
            {/* Content settings */}
            <motion.article
                variants={ isDesk ? variantsSettingsContent : variantsSettingsContentMobile }
            >
                <div className="content">
                    <Switch 
                        text='Dark mode'
                        id='dark_mode'
                    />
                </div>
                <div className='content-items'>
                    <Sound />
                    <Sound />
                    <Sound />
                </div>
            </motion.article>
            {/* Settings */}
            <motion.article
                onClick={ handleClick }
                data-testid='handle-event'
            >
                <img src='/assets/img/settings.svg' alt='settings' />
            </motion.article>
            {/* Bg */}
            <motion.article
                onClick={ handleClick }
                variants={ variantsSettingsBg }
            >
            </motion.article>
        </motion.section>
    )
}

export { Settings }