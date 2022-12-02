import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { AppLayout } from '../layout/AppLayout';

export default function Home() {
    return (
        <AppLayout>
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    css={{ backdropFilter: 'blur(10px)' }}>
                    Hola, Soy un desarrollador independiente radicado en Ecuador
                </Box>
            </Container>
        </AppLayout>
    );
}
