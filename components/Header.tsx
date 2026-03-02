'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] border-b border-subtle bg-base/80 backdrop-blur-md transition-all duration-500">
            <nav className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between font-display relative">
                {/* Logo - Stays above drawer */}
                <Link href="/" className="flex items-center gap-2 group z-[110]">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                        <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tighter text-content uppercase">ChrisPopDesigns Inc</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted hover:text-primary transition-colors"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 md:gap-6 z-[110]">
                    <ThemeToggle />
                    <a
                        href="https://wa.me/15550123456?text=Hi, I'm interested in a quote for architectural design."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all text-center"
                    >
                        Quote
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-content transition-transform duration-300 active:scale-90"
                        aria-label="Toggle Menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Panel - Fixed to viewport */}
                <div
                    className={`fixed inset-0 w-full h-screen bg-base transition-all duration-700 ease-in-out md:hidden flex flex-col justify-center items-center px-6 ${isMenuOpen
                        ? 'translate-y-0 opacity-100 z-[105]'
                        : '-translate-y-full opacity-0 pointer-events-none z-[105]'
                        }`}
                >
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative flex flex-col gap-8 text-center items-center w-full">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-5xl font-bold tracking-tighter text-content uppercase hover:text-primary transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className={`w-12 h-0.5 bg-subtle my-8 transition-all duration-700 delay-500 ${isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>

                        <a
                            href="https://wa.me/15550123456?text=Hi, I'm interested in a quote for architectural design."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-primary text-white w-full py-5 text-xs font-bold uppercase tracking-widest transition-all duration-700 delay-700 transform text-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            Request Quote
                        </a>

                        <div className={`mt-12 flex flex-col gap-2 text-muted text-[10px] uppercase tracking-[0.4em] transition-all duration-700 delay-1000 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <span>hello@chrispopdesign.com</span>
                            <a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+1 (555) 012-3456</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
