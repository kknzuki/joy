import React from "react";
import Link from "next/Link";

function Nav() {
  return (
    <>
      <div className="brand">
        <h1>Brandname</h1>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}

export default Nav;
