// app/portfolio/[slug]/PortfolioDetailClient.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

interface PortfolioDetailClientProps {
    images: string[]
}

export default function PortfolioDetailClient({ images }: PortfolioDetailClientProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const nextImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex + 1) % images.length)
    }

    const prevImage = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'Escape') setSelectedIndex(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex, images.length])

    return (
        <>
            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-2xl transition-all duration-500 animate-in fade-in"
                >
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none">
                        <button
                            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 group"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <span className="material-symbols-outlined text-4xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
                        </button>
                        <button
                            className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white pointer-events-auto transition-all transform hover:scale-110 active:scale-95 group"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform">chevron_right</span>
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    <div className="relative w-[90vw] h-[80vh]" onClick={() => setSelectedIndex(null)}>
                        <Image
                            src={images[selectedIndex]}
                            alt="Project Detail"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                {images.map((img, i) => {
                    let gridSpan = "md:col-span-6"
                    let aspect = "aspect-[4/3]"

                    if (i % 5 === 0) { gridSpan = "md:col-span-7"; aspect = "aspect-[4/3]"; }
                    else if (i % 5 === 1) { gridSpan = "md:col-span-5"; aspect = "aspect-square"; }
                    else if (i % 5 === 2) { gridSpan = "md:col-span-12"; aspect = "aspect-[21/7]"; }
                    else if (i % 5 === 3) { gridSpan = "md:col-span-5"; aspect = "aspect-square"; }
                    else if (i % 5 === 4) { gridSpan = "md:col-span-7"; aspect = "aspect-[4/3]"; }

                    return (
                        <div
                            key={i}
                            className={`relative overflow-hidden bg-sub group cursor-pointer transition-all duration-700 ${gridSpan} ${aspect} hover:shadow-2xl hover:shadow-primary/10`}
                            onClick={() => setSelectedIndex(i)}
                        >
                            <Image
                                src={img}
                                alt={`View ${i + 1}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                                <span className="material-symbols-outlined text-3xl">open_in_full</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
