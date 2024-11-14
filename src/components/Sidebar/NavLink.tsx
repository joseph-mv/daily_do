import React from "react";
import { Link } from 'react-router-dom';
type LinkProps = { href: string; children: string | React.ReactNode; className?:string };

export const NavLink: React.FC<LinkProps> = ({ href, children,className }) => (
  <li className={`mb-2 `}>
    <Link to={href} className={`block h-10 mx-4 py-2 hover:scale-105  ${className}`}>
      {children}
    </Link>
  </li>
);
