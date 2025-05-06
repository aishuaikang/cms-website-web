"use client";

import { UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export interface NavButtonProps {
    href: string;
    name: string;
    rel?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, name, rel }) => {
    const pathname = usePathname();

    const isActived = useCallback(
        (href: string) => {
            if (pathname === "/") {
                return href === pathname
                    ? "var(--mantine-primary-color-filled)"
                    : undefined;
            } else {
                return href === "/"
                    ? undefined
                    : pathname.startsWith(href)
                    ? "var(--mantine-primary-color-filled)"
                    : undefined;
            }
        },
        [pathname]
    );
    return (
        <UnstyledButton
            component={Link}
            href={href}
            style={{ color: isActived(href) }}
            rel={rel}
        >
            {name}
        </UnstyledButton>
    );
};

export default NavButton;
