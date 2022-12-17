import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <Button
                    onClick={toggleColorMode}
                    color={colorMode == 'dark' ? 'black' : 'white'}
                    bg={useColorModeValue('purple.500', 'orange.300')}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThemeToggleButton;
