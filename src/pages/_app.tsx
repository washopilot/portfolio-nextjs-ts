import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import MainLayout from '../layout/MainLayout';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
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
}
