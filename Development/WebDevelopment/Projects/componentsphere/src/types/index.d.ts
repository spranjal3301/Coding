import { Icons } from "@/components/icons";

export interface T_NavItem{
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    paid?: boolean;
    event?: string;
    items?: T_NavItem[];
} 

export type DashboardConfig = {
    mainNav: T_NavItem[];
    sidebarNav: T_NavItem[];
};