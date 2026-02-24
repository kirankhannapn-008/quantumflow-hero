"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar__container">
                <Link href="#home" className="navbar__logo">
                    QuantumFlow
                </Link>

                <nav className="navbar__nav" aria-label="Main Navigation">
                    <Link href="#features">Features</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#value">Value</Link>
                    <Link href="#contact">Contact</Link>
                </nav>

                <div className="navbar__actions">
                    <button className="btn btn--secondary">Login</button>
                    <button className="btn btn--primary">Get Started</button>
                </div>
            </div>
        </header>
    );
}