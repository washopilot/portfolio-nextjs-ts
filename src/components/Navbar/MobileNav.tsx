import { Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { NAV_ITEMS as Links } from './NavData';
import NavLink from './NavLink';

interface MobileNavProps {
    isOpen: boolean;
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
    const router = useRouter();
    const color = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');

    if (!isOpen) return null;

    return (
        <Box
            p={4}
            display={{ md: 'none' }}
            pos={'fixed'}
            top={'4em'}
            bg={'white'}
            w={'full'}
            minH={'calc(100vh - 4em)'}
            zIndex={999}
            css={{
                backdropFilter: 'blur(5px)',
                backgroundColor: `${color}`
            }}>
            <Stack as={'nav'} spacing={4}>
                {Links.map((link, idx) => (
                    <NavLink key={link.label} href={link.href} active={router.asPath == link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </Stack>
        </Box>
    );
};
