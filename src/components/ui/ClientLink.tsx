"use client";

import Link, { LinkProps } from "next/link";
import { useClient } from "@/context/ClientContext";
import { ReactNode } from "react";

interface ClientLinkProps extends LinkProps {
   children: ReactNode;
   className?: string;
}

export default function ClientLink({ href, ...props }: ClientLinkProps) {
   const { slug } = useClient();

   // If we are in a client context and the link is an internal absolute path (starts with /), prepend the slug
   // Exception: Don't modify if it's just "/" (home) unless we specifically want separate homes
   // Actually, for home, we probably want /monkey-king as the home.

   let finalHref = href;

   if (slug && typeof href === "string" && href.startsWith("/")) {
      // Avoid double prefixing if logic is complex, but here we assume href is root-relative
      // e.g. /catalog -> /monkey-king/catalog
      finalHref = `/${slug}${href === "/" ? "" : href}`;
   }

   return <Link href={finalHref} {...props} />;
}
