import { motion } from 'framer-motion';
import Head from 'next/head';
import { ReactNode } from 'react';
import { GridItemStyle } from '../components/GridItem';

interface AppLayoutProps {
    children: ReactNode;
    title?: string;
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
};

export const AppLayout = ({ children, title }: AppLayoutProps) => {
    const t = `${title} - Fernando Chicaiza`;

    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}>
            {title && (
                <Head>
                    <title>{t}</title>
                    <meta name="twitter:title" content={t} />
                    <meta property="og:title" content={t} />
                </Head>
            )}
            {children}
            <GridItemStyle />
        </motion.article>
    );
};
