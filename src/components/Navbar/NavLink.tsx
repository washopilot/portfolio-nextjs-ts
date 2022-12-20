import { Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode, useContext } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { IsOpenContext } from './Navbar';

const NavLink = ({
    children,
    href,
    active,
    icon
}: {
    children: ReactNode;
    href: string;
    active: boolean;
    icon?: string;
}) => {
    const { onClose } = useContext(IsOpenContext);

    const bg_color_hover = useColorModeValue('gray.200', 'gray.700');
    const bg_color_active = useColorModeValue('purple.500', 'purple.200');
    const color_active = useColorModeValue('white', 'black');

    return (
        <>
            <NextLink href={href} legacyBehavior passHref>
                <Link
                    target={icon ? '_blank' : undefined}
                    px={3}
                    py={1}
                    bg={active ? bg_color_active : undefined}
                    borderRadius="md"
                    color={active ? color_active : undefined}
                    fontWeight={active ? 'bold' : undefined}
                    _hover={{
                        textDecoration: 'none',
                        bg: active ? undefined : bg_color_hover
                    }}
                    display={icon ? 'inline-flex' : undefined}
                    gap={2}
                    alignItems={'center'}
                    onClick={() => onClose()}
                    variant={'ghost'}>
                    {icon ? <IoLogoGithub /> : undefined}
                    {children}
                </Link>
            </NextLink>
        </>
    );
};

export default NavLink;
