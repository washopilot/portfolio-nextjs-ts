import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// import { Footer } from '@/components/Footer';
import Header from '../components/Navbar/Navbar';

interface AppLayoutProps {
    children: ReactNode;
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <>
            {/* <Header /> */}
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative' }}>
                {children}
                {/* <Footer /> */}
            </motion.article>
        </>
    );
};
