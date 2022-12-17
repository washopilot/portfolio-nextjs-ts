import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    styles: {
        global: (props: Record<string, string>) => ({
            body: {
                bg: mode('#e6e6ff', '#202023')(props)
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
    },
    components: {
        Heading: {
            variants: {
                'section-title': {
                    textDecoration: 'underline',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4
                }
            }
        }
    }
});

export default theme;
