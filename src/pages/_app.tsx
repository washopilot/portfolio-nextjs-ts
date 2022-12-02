import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import MainLayout from '../layout/MainLayout';
import Fonts from '../components/Fonts';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <MainLayout>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 });
                        }
                    }}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </MainLayout>
        </ChakraProvider>
    );
};

export default App;
