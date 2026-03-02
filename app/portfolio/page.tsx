import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getPortfolioItems() {
    return await prisma.portfolio.findMany({
        orderBy: { createdAt: 'desc' }
    });
}

export default async function PortfolioPage() {
    const portfolio = await getPortfolioItems();

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-16 py-16 lg:py-24 mt-20">
                <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-content mb-6 uppercase leading-none">
                            Our <br /> Portfolio
                        </h1>
                        <p className="text-muted text-lg max-w-md leading-relaxed font-light">
                            A curated showcase of architectural precision and structural fabrication excellence.
                        </p>
                    </div>
                </div>

                {portfolio.length === 0 ? (
                    <div className="text-center py-32 border border-dashed border-subtle">
                        <p className="text-muted font-light italic">No portfolio items found yet. Please add some from the admin panel.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {portfolio.map((item, index) => (
                            <Link
                                key={item.id}
                                href={`/portfolio/${item.slug}`}
                                className={`group relative cursor-pointer overflow-hidden aspect-[4/5] bg-sub transition-transform duration-500 hover:shadow-2xl hover:shadow-primary/5`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.heroImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{item.category}</p>
                                    <h3 className="text-white text-2xl font-bold leading-tight uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-white/40 text-xs font-mono mt-2 tracking-widest">{item.year}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-48 mb-24 flex justify-center">
                    <Link href="/contact" className="group flex items-center gap-4 bg-content text-base hover:bg-primary transition-all duration-500 py-6 px-12 uppercase text-[10px] font-bold tracking-[0.4em] shadow-xl hover:shadow-primary/20">
                        Start Your Project
                        <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
