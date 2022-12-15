import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// const StyledDiv = chakra(motion.div, {
//     shouldForwardProp: (prop) => {
//         return shouldForwardProp(prop) || prop === 'transition';
//     }
// });

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.section
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeIn', delay: delay }}>
        <Box mb={6}>{children}</Box>
    </motion.section>
);

export default Section;
