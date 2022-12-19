import { Box, Text } from '@chakra-ui/react';

import React from 'react';

const BioSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box pl={'3.4em'} textIndent={'-3.4em'} style={{ hyphens: 'auto' }}>
            {children}
        </Box>
    );
};

export const BioYear = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text as={'span'} fontWeight={'bold'} mr={'1em'}>
            {children}
        </Text>
    );
};

export default BioSection;
