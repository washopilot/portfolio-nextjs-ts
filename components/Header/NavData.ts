interface NavItem {
    label: string;
    href: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Blog',
        href: '/blog'
    }
];
