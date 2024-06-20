"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

function Header() {
  const path = usePathname();
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logoImg} alt="foodie img" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href={"/meals"}
                className={path.startsWith("/meals") && classes.active} // here we use startsWith we have /meals/share nested path 
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href={"/community"}
                className={path === "/community" && classes.active}
              >
                Foodie Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
