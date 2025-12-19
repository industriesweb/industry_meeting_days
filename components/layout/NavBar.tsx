import React from "react";
import Link from "next/link";
import event from "@/data/event.json";

export default function NavBar() {
  return (
    <div className="w-full items-center justify-end gap-x-4 hidden md:flex">
      {event.header.navbar.map((item) => (
        <NavBarItem key={item.title} path={item.path} title={item.title} />
      ))}
    </div>
  );
}

const NavBarItem = ({ path, title }: { path: string; title: string }) => {
  return (
    <>
      <Link href={path} className="text-text-inverted hover:text-accent font-medium">{title}</Link>
    </>
  );
};
