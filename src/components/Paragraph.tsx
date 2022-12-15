import { Text } from '@chakra-ui/react';
import React from 'react';

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text textAlign={'justify'} textIndent={'1em'} style={{ hyphens: 'auto' }}>
            {children}
        </Text>
    );
};

export default Paragraph;
