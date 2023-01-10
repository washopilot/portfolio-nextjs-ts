import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import thumbInkdrop from '../../public/assets/images/works/inkdrop_eyecatch.png';
import { WorkGridItem } from '../components/GridItem';
import Section from '../components/Section';
import { AppLayout } from '../layout/AppLayout';

const about = () => {
    return (
        <AppLayout title="Portafolio">
            <Container maxW={'max-content'}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Portafolio
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section >
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support
                        </WorkGridItem>
                    </Section>
                    <Section >
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                            A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </AppLayout>
    );
};

export default about;
