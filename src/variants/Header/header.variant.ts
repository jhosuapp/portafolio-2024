const variantsHeaderChildren = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const variantsHeaderParent = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variantsHeaderBg = {
    open: {
        opacity: 1,
    },
    close: {
        opacity: 0,
        transition: {
            delay: 0.2
        }
    }
};


export { variantsHeaderChildren, variantsHeaderParent, variantsHeaderBg }