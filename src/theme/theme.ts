import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    styles: {
        global: (props: Record<string, string>) => ({
            body: {
                bg: mode('#f0e7db', '#202023')(props)
            }
        })
    },
    config: {
        initialColorMode: 'light'
    }
});

export default theme;
