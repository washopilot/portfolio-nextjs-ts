import { motion } from 'framer-motion';

// const StyledDiv = chakra(motion.div, {
//     shouldForwardProp: (prop) => {
//         return shouldForwardProp(prop) || prop === 'transition';
//     }
// });

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeIn', delay: delay }}>
        {children}
    </motion.div>
);

export default Section;
