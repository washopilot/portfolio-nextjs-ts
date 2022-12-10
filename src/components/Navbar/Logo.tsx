import { Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const Logo = () => {
    return (
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <NextLink href={'/'} legacyBehavior passHref>
                <Link
                    _hover={{ textDecoration: 'none' }}
                    fontWeight={'bold'}
                    fontSize={'3xl'}
                    fontFamily={`'Covered By Your Grace'`}>
                    Fernando Chicaiza
                </Link>
            </NextLink>
        </motion.div>
    );
};

export default Logo;
