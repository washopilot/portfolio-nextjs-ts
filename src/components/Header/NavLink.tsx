import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const NavLink = ({ children, href, active }: { children: ReactNode; href: string; active: boolean }) => {
    const bg_color_hover = useColorModeValue('gray.200', 'gray.700');
    const bg_color_active = useColorModeValue('green.200', 'purple.700');

    return (
        <NextLink href={href} legacyBehavior passHref>
            <Link
                px={2}
                py={1}
                bg={active ? bg_color_active : undefined}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: bg_color_hover
                }}>
                {children}
            </Link>
        </NextLink>
    );
};
export default NavLink;
