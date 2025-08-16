import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PropTypes {
  children: ReactNode;
  isActive: Boolean;
  href: string;
}

export default function NavbarItem(props: PropTypes) {
  const { children, href, isActive } = props;

  return (
    <li>
      <a href={href} className={cn("block py-2 px-3 rounded-full dark:text-white", isActive ? 'bg-black/40 text-black dark:bg-white/40' : 'bg-transparent text-black/70')}>
        {children}
      </a>
    </li>
  );
}
