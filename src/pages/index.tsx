import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import fotoPerfil from '../../public/assets/images/foto_perfil.jpg';
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
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloremque! Distinctio quisquam
                        nisi quae, fugit quidem tempora iure est minima, rem totam numquam. Possimus, voluptates!
                        Expedita, quisquam quis fugit officiis dolore temporibus cupiditate consequatur in nisi minus
                        inventore dolorum accusantium assumenda. Voluptatum dolore nihil consequuntur accusamus eligendi
                        quis laudantium vel iste tempora quo! Dignissimos cumque fuga aut rerum dicta harum aliquam,
                        deleniti eius, pariatur vitae facilis nostrum, et id repudiandae tempore facere consequuntur
                        dolores veniam earum? Consequuntur laboriosam autem impedit alias eius deleniti quas beatae
                        possimus deserunt tenetur, asperiores atque porro, perferendis, explicabo ducimus optio
                        similique! Aliquid culpa quam, nihil totam, neque iusto atque quia id in sint consequuntur
                        possimus itaque porro enim molestias. Quam ipsa eligendi tempore! Animi ratione voluptatum
                        perferendis quo nobis. Rerum corrupti ratione earum delectus incidunt laboriosam facilis fugit
                        voluptates reiciendis nobis. Possimus, nulla? Doloribus nobis rem id aliquid ab officia, totam,
                        alias eius neque ex amet quo ad natus enim itaque, at officiis autem molestias quos ut
                        recusandae nulla fugit dicta veritatis. A adipisci natus vel sint hic repellendus facere iusto
                        atque asperiores iure aspernatur molestiae assumenda eaque aliquid est ex reprehenderit sapiente
                        nesciunt ab explicabo, dolores veniam. Consequatur minus fugit, totam natus impedit quia quasi
                        esse cum error sequi quas unde nesciunt! Blanditiis ullam nostrum reiciendis, impedit totam
                        eaque. Asperiores maxime, consectetur suscipit ipsum dolorum alias magni quas enim ea, labore
                        sint atque veniam itaque mollitia illum deserunt beatae ab exercitationem voluptatibus
                        distinctio tempora expedita, repellendus quia? Quisquam, ipsam. Voluptas officia fugit
                        necessitatibus esse, consequatur dolores ad, ullam voluptate corporis magni laborum iure natus.
                        Porro cum esse reprehenderit mollitia doloribus cumque minus commodi ullam aliquid placeat rem
                        culpa facilis, quis sed libero inventore iure et. Veritatis autem expedita perferendis
                        blanditiis laboriosam, ipsam aut vitae. Voluptatem dicta ut, accusantium molestiae porro
                        deserunt, sequi nobis sed ad veniam obcaecati voluptatibus omnis architecto! Amet illum id quasi
                        impedit possimus sit sequi officiis nemo. Harum eius eligendi molestias tenetur deleniti
                        adipisci animi debitis ullam, sunt nostrum incidunt voluptatem quam amet magni non natus. Ullam
                        consequatur maxime doloribus atque ea provident placeat quis consectetur sapiente assumenda?
                        Aliquam, cumque doloremque! Quos, enim laudantium nihil quisquam ex possimus asperiores
                        exercitationem nulla doloremque eius officiis libero blanditiis, dolor veritatis perspiciatis
                        obcaecati atque velit consequuntur porro. Officiis doloremque blanditiis facilis natus, quasi
                        laborum quisquam vero temporibus impedit incidunt aut soluta accusamus, dolorum quo debitis
                        aspernatur commodi quibusdam cum nulla perspiciatis eveniet saepe voluptatem. Commodi vitae eum
                        quas veniam enim? Porro officia repellendus nesciunt voluptate ullam vitae minima, dolorum
                        accusamus eaque repudiandae. Pariatur magni consectetur, aspernatur consequuntur, reprehenderit
                        assumenda corrupti porro saepe, modi quas ratione. Fugit provident cupiditate maiores eum ullam
                        necessitatibus rerum voluptatibus delectus aliquid nam? Explicabo necessitatibus ipsum
                        recusandae iure nesciunt laudantium ipsam eaque culpa error ex voluptatum soluta, provident,
                        maiores perferendis quasi ducimus architecto repellendus exercitationem ea dolore distinctio
                        vitae odio delectus. Deserunt ipsa consequatur recusandae modi facere a provident porro,
                        asperiores reprehenderit, delectus nesciunt voluptatem error. Ab autem delectus porro, quasi
                        eaque ut nulla nostrum facere repellendus sunt labore. Modi at facilis molestiae necessitatibus
                        unde. Necessitatibus perspiciatis quos molestiae dolores maxime, perferendis debitis aliquid
                        rerum sunt quas ex, cupiditate, obcaecati nisi maiores iure architecto laboriosam hic facilis
                        quae fugit delectus commodi facere dignissimos. Blanditiis nisi adipisci obcaecati similique?
                        Praesentium molestiae officia possimus sit inventore obcaecati tenetur aspernatur. Quibusdam
                        recusandae ipsa eum maxime consequuntur dolore quod, sit repudiandae harum, est illum maiores
                        odio! Eius odio esse quis doloremque sapiente velit neque similique porro quos quisquam vero
                        molestiae cumque, corrupti blanditiis officia dicta animi eum quia repellendus! Aut, nulla
                        ducimus ea eius beatae dolorum at harum, culpa ullam id voluptatem suscipit voluptate dolor
                        nobis ex rerum quam dolores velit. Magni aliquid eos facere repellendus eligendi perspiciatis
                        laborum, voluptas nulla rem ipsum porro, placeat saepe doloremque! Vel dignissimos rem dolore
                        quisquam esse unde aut porro molestiae deleniti veniam natus minus, consectetur fuga nihil
                        impedit architecto voluptatem, illum, at sunt incidunt dolorem voluptate atque. Assumenda
                        molestias itaque hic et eligendi ullam minus minima blanditiis. Ex dignissimos cum, assumenda
                        aut animi labore illum delectus tempore unde necessitatibus autem quasi aperiam pariatur
                        temporibus iste placeat rem dolorum, omnis excepturi maiores? Neque doloremque alias quibusdam
                        dolorem tempore id pariatur hic fugit modi accusamus animi iure nulla, molestias non enim fuga
                        nihil praesentium provident necessitatibus laboriosam voluptatem veniam vero eius! Eveniet quia
                        ratione natus est doloribus voluptatum, beatae asperiores veritatis? Molestiae deleniti ab
                        quidem tenetur numquam aperiam beatae minima voluptate quia. Voluptate deserunt natus autem
                        eligendi sed minima placeat fugiat impedit quibusdam, ab, officia rem illo recusandae earum
                        delectus ipsam odit dolores aliquid ea neque. Deleniti laboriosam dignissimos iusto hic est
                        maxime, animi natus iste? Modi quidem ullam facere obcaecati assumenda voluptatum ducimus?
                        Maxime magnam aliquid tenetur repellat quae cum iste atque dolorum, modi voluptatem aliquam ea
                        ut sequi odit sit rem! Placeat totam alias magnam non aut quisquam doloribus obcaecati ipsam
                        quidem eaque? Nesciunt voluptates, placeat unde blanditiis nihil suscipit! Asperiores eius
                        fugit, sed assumenda et quaerat magnam quae, consequuntur eum libero odio veniam repudiandae
                        molestias. Dolorem aliquam adipisci corrupti molestiae praesentium fugiat quas nobis, inventore
                        maiores quaerat iste obcaecati voluptatibus nulla? Debitis iusto doloremque ratione et.
                        Blanditiis asperiores neque itaque fugit! Perspiciatis aspernatur id porro laborum debitis!
                        Consequatur, at a consectetur dolorum earum architecto. Modi eius maiores dicta libero
                        cupiditate nemo facere, vel iste itaque nihil officia a, accusamus delectus repudiandae
                        consectetur quam facilis dolore harum et at dolorum temporibus possimus aliquam sunt. Corrupti
                        labore quidem officia, aut atque asperiores ullam minus sint omnis exercitationem commodi iusto
                        repellat laborum excepturi quisquam voluptas quibusdam culpa laudantium illo ipsa soluta
                        voluptatem, sunt doloribus! Recusandae consectetur odit minus necessitatibus nostrum architecto
                        vero ipsum, consequatur eum tempora corrupti incidunt hic quidem fugiat ea quos sapiente! A
                        commodi reprehenderit odit. Repudiandae accusamus libero quod, illum quisquam magni commodi
                        earum tempora dignissimos quasi maiores recusandae cumque veniam? Sunt pariatur, expedita iusto
                        non sint veritatis, veniam numquam explicabo ducimus eos dolorem enim autem voluptas quae
                        blanditiis consequuntur voluptates repellat quaerat tempore earum nisi asperiores quam vel
                        obcaecati! Dolorem cum aut possimus pariatur repudiandae!
                    </Paragraph>
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
