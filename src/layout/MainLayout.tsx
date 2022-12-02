import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Fernando's HomePage" />
                <meta name="author" content="Fernando Chicaiza" />
                <meta name="author" content="washopilot" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Fernando Chicaiza" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@washopilot" />
                <meta name="twitter:creator" content="@washopilot" />
                <meta name="twitter:image" content="https://twitter.com/washopilot/photo" />
                <meta property="og:site_name" content="Fernando Chicaiza" />
                <meta name="og:title" content="Fernando Chicaiza" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://twitter.com/washopilot/photo" />
                <title>Fernando Chicaiza - Homepage</title>
            </Head>

            <Navbar />

            <Container maxW="container.md" pt={14}>
                {/* <LazyVoxelDog />   */}

                {children}

                <Footer />
            </Container>
        </Box>
    );
};

export default MainLayout;
