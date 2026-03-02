import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import PortfolioDetailClient from "./PortfolioDetailClient"

export const dynamic = "force-dynamic"

export default async function ProjectDetail({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const item = await prisma.portfolio.findUnique({
        where: { slug }
    })

    if (!item) {
        notFound()
    }

    // Cast details safely
    const details = item.details as any[] || []
    const allImages = [item.heroImage, ...item.gallery.filter(img => img !== item.heroImage)]

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-1 mt-20">
                <section className="pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="max-w-3xl">
                            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block animate-fade-in text-primary">
                                {item.category} / {item.year}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-content uppercase leading-none mb-8 animate-fade-in-up">
                                {item.title}.
                            </h1>
                            <p className="text-xl md:text-2xl text-content/70 font-light leading-relaxed max-w-2xl animate-fade-in">
                                {item.description}
                            </p>
                        </div>
                        <div className="lg:w-1/3 grid grid-cols-2 gap-x-8 gap-y-4 pt-8 border-t border-subtle lg:border-t-0 animate-fade-in">
                            {details.map((detail, i) => (
                                <div key={i} className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">{detail.label}</span>
                                    <span className="text-sm font-medium uppercase text-content">{detail.value}</span>
                                </div>
                            ))}
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">Location</span>
                                <span className="text-sm font-medium uppercase text-content">{item.location}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
                    <PortfolioDetailClient images={allImages} />
                </section>

                <section className="py-24 border-t border-subtle">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
                        <Link href="/portfolio" className="group flex items-center gap-4 text-muted hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-[0.4em]">
                            <span className="material-symbols-outlined transform group-hover:-translate-x-2 transition-transform duration-500">arrow_back</span>
                            Back to Collection
                        </Link>

                        <div className="flex items-center gap-12">
                            <a
                                href="https://wa.me/254700000000?text=Hi, I'm interested in discussing a project similar to this one."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold uppercase tracking-[0.4em] text-content hover:text-primary transition-colors"
                            >
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
