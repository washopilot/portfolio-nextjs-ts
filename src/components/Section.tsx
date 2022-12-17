import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionSection = chakra(motion.section, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition';
    }
});

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <MotionSection
        mb={10}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ delay: delay, ease: 'easeIn' }}>
        {children}
    </MotionSection>
);

export default Section;
