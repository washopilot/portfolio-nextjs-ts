interface NavItem {
    label: string;
    href: string;
    icon?: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Proyectos',
        href: '/works'
    },
    {
        label: 'Fuente',
        href: 'https://github.com/washopilot/portfolio-nextjs-ts',
        icon: 'github'
    }
];
