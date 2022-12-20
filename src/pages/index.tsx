import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io5';
import fotoPerfil from '../../public/assets/images/foto_perfil.jpg';
import BioSection, { BioYear } from '../components/BioSection';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import { AppLayout } from '../layout/AppLayout';

// const ProfileImage = chakra(Image, {
//     shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
// });

const Home = () => {
    return (
        <AppLayout>
            <Container maxW={'max-content'}>
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
                            borderColor={useColorModeValue('gray.800', 'white')}
                            bgColor={useColorModeValue('gray.800', 'white')}
                            borderWidth={3}
                            borderStyle="solid"
                            boxSize={130}
                            display="inline-block"
                            borderRadius="full"
                            overflow="auto"
                            position="relative">
                            <ImgBlurAnimated
                                src={fotoPerfil}
                                alt="Profile image"
                                fill
                                style={{ objectFit: 'cover' }}
                                placeholder="blur"
                            />
                        </Box>
                    </Box>
                </Box>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Acerca de
                    </Heading>
                    <Paragraph>
                        Fernando es un Desarrollador Freelancer radicado en Loja, Ecuador, con una marcada pasión por el
                        mundo tecnológico y el diseño 3D. Primordialmente enfoca sus esfuerzos por la construcción de
                        nuevos servicios digitales y aprendizaje continuo (para saciar su hambre por código funcional y
                        elegante) desde la planeación y diseño eficiente para resolver problemas de la vida real que
                        satisfaga las necesidades de sus clientes. Entusiasta y evangelista del ecosistema de React por
                        excelencia, siempre se mantiene pendiente de las últimas novedades en el área del desarrollo
                        Front-End.
                    </Paragraph>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/works" passHref scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple" variant="solid" size="sm">
                                Mi portafolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Curriculum
                    </Heading>
                    <BioSection>
                        <BioYear>1979</BioYear>
                        Nace en Quito, Ecuador
                    </BioSection>
                    <BioSection>
                        <BioYear>2006</BioYear>
                        Título de Ingeniero de la Universidad Técnica Particular de Loja
                    </BioSection>
                    <BioSection>
                        <BioYear>2007-2017</BioYear>
                        Diversos proyectos (construcción, consultoría, fiscalización)
                    </BioSection>
                    <BioSection>
                        <BioYear>2018 a actual</BioYear>
                        Especialista presupuestos, Compras Públicas
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 a actual</BioYear>
                        Freelancer desarrollador web, especialidad Front-End
                    </BioSection>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h3" variant="section-title">
                        Me gusta
                    </Heading>
                    <Paragraph>Diseño 3D, Progressive Rock, React, Manjaro Linux</Paragraph>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h3" variant="section-title">
                        En línea
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/washopilot" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoGithub />}>
                                    @washopilot
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/washopilot" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoTwitter />}>
                                    @washopilot
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.facebook.com/washopilot" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoFacebook />}>
                                    @washopilot
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://wa.me/593967896544" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<IoLogoWhatsapp />}>
                                    WhatsApp-0967896544
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </AppLayout>
    );
};

// Custom NextJs Img-loader
const ImgBlurAnimated = (props: ImageProps) => {
    const [blur, setBlur] = useState(false);

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...props}
            onLoadingComplete={() => setBlur(true)}
            style={
                blur
                    ? { filter: 'blur(0rem)', transition: '0.5s' }
                    : {
                          filter: 'blur(1em)'
                      }
            }
        />
    );
};

export default Home;
