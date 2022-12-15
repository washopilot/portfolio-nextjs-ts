import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import fotoPerfil from '../../public/assets/images/foto_perfil.jpg';
import { AppLayout } from '../layout/AppLayout';

// const ProfileImage = chakra(Image, {
//     shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
// });

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

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Fernando Chicaiza
                        </Heading>
                        <p>Artista Digital ( Desarrollador Front-End )</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={3}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                            position="relative">
                            <Image
                                src={fotoPerfil}
                                alt="Profile image"
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </AppLayout>
    );
}
