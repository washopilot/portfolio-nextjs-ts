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
    fonts: {
        body: `'Open Sans', sans-serif`,
        heading: `'Open Sans', sans-serif`
        // mono: 'Menlo, monospace'
    },
    config: {
        initialColorMode: 'light'
    }
});

export default theme;
