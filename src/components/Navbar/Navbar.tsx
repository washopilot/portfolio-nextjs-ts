import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Container, Flex, HStack, IconButton, Link, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';

import { MobileNav } from './MobileNav';
import { NAV_ITEMS as Links } from './NavData';
import NavLink from './NavLink';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();

    return (
        <>
            <Flex
                as={'nav'}
                pos="fixed"
                top="0"
                w={'full'}
                minH={'3em'}
                boxShadow={'sm'}
                zIndex="999"
                justify={'center'}
                css={{
                    backdropFilter: 'blur(5px)',
                    backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                }}>
                <Container as={Flex} maxW={'7xl'} align={'center'}>
                    <Flex width={'full'} h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />

                        <HStack spacing={8} alignItems={'center'}>
                            <NextLink href={'/'} legacyBehavior passHref>
                                <Link _hover={{ textDecoration: 'none' }} fontFamily={'M PLUS Rounded 1c", sans-serif'}>
                                    Fernando Chicaiza
                                </Link>
                            </NextLink>
                            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                                {Links.map((link) => (
                                    <NavLink key={link.label} href={link.href} active={router.asPath == link.href}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </HStack>
                        </HStack>

                        <Flex alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <ThemeToggleButton />
                            </Stack>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
            <MobileNav isOpen={isOpen} />
        </>
    );
};

export default Navbar;
