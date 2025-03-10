import { Home, Store, BriefcaseBusiness, Shapes, Users, Book } from "lucide-react";

export type ItemSub = {
    title: string;
    href: string;
  }
  
export type SideBarMenuItem = {
    href: string;
    icon: React.FC<any>;
    title: string;
    sub?: ItemSub[]
}

export type SideBarMenuGroup = {
    groupTitle: string;
    items: SideBarMenuItem[];
}

export const CONSOLE_MENU: SideBarMenuGroup[] = [
    {
        groupTitle: '',
        items: [
            {
                href: '/',
                icon: Home,
                title: 'dashboard'
            },
            {
                href: '/console/users',
                icon: Users,
                title: 'users'
            },
        ]
    },
    {
        groupTitle: 'website',
        items: [
            {
                href: '#',
                icon: Store,
                title: 'website_pages'
            },
            {
                href: '#',
                icon: Store,
                title: 'media_library'
            },
            {
                href: '#',
                icon: BriefcaseBusiness,
                title: 'blog'
            },
            {
                href: '#',
                icon: Shapes,
                title: 'forms'
            }
        ]
    }
]