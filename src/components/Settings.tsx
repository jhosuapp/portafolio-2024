import { motion } from 'framer-motion';
import { useState } from 'react';
import { variantsSettingsContent, variantsSettingsBg, variantsSettingsContentMobile } from '@/variants';
import { useMediaQuery } from '@/hooks';
import { Switch } from './Switch';

const Settings = ():JSX.Element => {

    const isDesk = useMediaQuery({breakpoint: 991 });

    const [ settings, setSettings ] = useState<boolean>(false);

    const handleClick = ()=>{
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
            </motion.article>
            {/* Settings */}
            <motion.article
                onClick={ handleClick }
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