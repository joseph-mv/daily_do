import React from "react";

type LinkProps = { href: string; children: string | React.ReactNode; className?:string };

export const Link: React.FC<LinkProps> = ({ href, children,className }) => (
  <li className={`mb-2 `}>
    <a href={href} className={`block h-10 mx-4 py-2 hover:scale-105  ${className}`}>
      {children}
    </a>
  </li>
);
