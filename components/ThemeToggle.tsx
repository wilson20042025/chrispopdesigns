'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setMounted(true);
        // Check initial theme from HTML class
        const isCurrentlyDark = document.documentElement.classList.contains('dark');
        setIsDark(isCurrentlyDark);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Prevent hydration mismatch by only rendering the toggle content on the client
    if (!mounted) {
        return (
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-subtle bg-sub" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-subtle bg-sub hover:bg-sub/80 transition-all shadow-sm"
            aria-label="Toggle Theme"
        >
            <span className="material-symbols-outlined text-xl text-content">
                {isDark ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    );
}
