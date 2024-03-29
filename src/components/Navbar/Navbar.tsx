import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Container, Fade, Flex, HStack, IconButton, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext } from 'react';
import Logo from './Logo';
import { MobileNav } from './MobileNav';
import { NAV_ITEMS as Links } from './NavData';
import NavLink from './NavLink';
import ThemeToggleButton from './ThemeToggleButton';
export const IsOpenContext = createContext({} as { onClose: () => void });

const Navbar = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

    const router = useRouter();

    return (
        <IsOpenContext.Provider value={{ onClose }}>
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
                    backdropFilter: 'blur(6px)',
                    backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
                }}>
                <Container as={Flex} maxW={'4xl'} align={'center'}>
                    <Flex width={'full'} h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            borderRadius={0}
                            display={{ md: 'none' }}
                            onClick={onToggle}
                        />

                        <HStack spacing={8} alignItems={'center'}>
                            <Logo />

                            <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
                                {Links.map((link) => (
                                    <NavLink
                                        key={link.label}
                                        href={link.href}
                                        active={router.asPath == link.href}
                                        icon={link.icon}
                                        fontSize={'larger'}>
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
            <Fade
                in={isOpen}
                transition={{
                    enter: { duration: '0.1', ease: 'easeInOut' },
                    exit: { duration: '0.1', ease: 'easeInOut' }
                }}>
                <MobileNav />
            </Fade>
        </IsOpenContext.Provider>
    );
};

export default Navbar;
