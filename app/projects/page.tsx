import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
    const projects = [
        {
            category: "Architecture",
            title: "Nouveau Pavilion",
            year: "2023",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuqzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY"
        },
        {
            category: "Fabrication",
            title: "Steel Lattice Structure",
            year: "2022",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_8_x8QCjBMCTTWQ0fC__hzxMkd2qZ-cCMlY5nIp0VZXTk5guGJq4W9ehdofVYyOsiPBvGWpx1jOxSa62MENrddjp8c3dEqYSk1oZJk4ei8HdRThIdoZAYEVLix-KWVZkQWLHByn6M2ZUr42zx1xucBwAUYKWzJmP0ob8opcsCDPvTEW3A4U7DBdm_X2AgeLFrPY2VLD_qlWCo-0E8kYHsl_LWwPsuxQTi0xufny-dzS_WXQprignoTrTz3zreUWiLck7-JtfhOZk"
        },
        {
            category: "Architecture",
            title: "The Monolith",
            year: "2023",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHyJcPBCF6ebsUGU7ZCypNmUKZVOynARX9M55AN1JZZOxWUU81CfgMkT0kY-PuJBgJoMS8Nt5Ej-BQqxOXnXIrWvC7rtZBPGycZi50JvmSR7WwQquBpldbRqxoFC9hWpm8h3rNN41csvdE_AgpO66QYOr9ZFvu00o7nWPMLPlzSUq1MvrCLkSPT5FtMP81cfkhEsNrUei7ldsm2Q1uNCpeHsfS_DP2zrkyEv8DgN_ZIIYMOUjxVhW1mQbIxXEWVv6p2XCdq7a7u4E",
            shifted: true
        },
        {
            category: "Fabrication",
            title: "Glass Atrium",
            year: "2021",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUrdaK7RHH-ozwFT4M7WQxEsy49dm56QTIIk4vInlO7rAZeYEMArRqDYGwGB16F2KRKbz5SZAGuZkcKJWBgUi3U_7XNtmqcpMVWOykK7emqQrQJzuyEq16v9ba30VOplcC4qZ5W6Tw5QqF4S09sdvDXHSVb7vwcgD_PcFRrd2SHHmG8nx6YaZhaHbbPSZ-UCDv8AXdMOZGY-4Ux7bgQppHBBCQWmyWCdWFzEhCBjKaYf4RNyWMGZXGK3b_4s9BJ49pScQeOMmS1A"
        },
        {
            category: "Architecture",
            title: "The Cantilever",
            year: "2022",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBlLWvcrLuCVkj1e7-gpO_D7EbxFScUgMRLOqxqdvmYFotxGKyU8itY0jxpls6ABwXPuMOmnDq_ymbEmVUWPfC4wTh5zHDXSMJUIndtFQSM4N_a2SrLRtafZ6RRNYfBDqSbp0RzemFq90aj5DtZDkaDF_I7ycKSE2jw5T2fD_XE4CCE2mtRhe5lLJiYzcCrLoNN32em4y6fuLdIl7nsNfL-Vr_uqrENklLBensGjN2miJ5GKBMwYpuc3fH6q7Tp7znGv9dpMfu6MI"
        },
        {
            category: "Fabrication",
            title: "Industrial Core",
            year: "2023",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN4wYeoGIixUoJ5bKg4QWShbfXsGK08x3YJYiuFOjU1xvlZJiv5o6E7t4KG-Iq3zUAo6UsV8bW-By-Xn3BOk28m7mgbbHCE1kBGKjfYh5V7SvlXn4ukTsb2U9eS2d8DzjyZzMIiEz5kUUrZnB0J01h19OBveWrwRLvOk0s5_pv72pT2ptWqSj8rKgRv6U1LQJVah3rmFyfjtpQXBlHW5fe1-uj5nlYSi206e-QjEsWwaoE2AS5G4Cw4ziGMJj9fOdWWNL5leM1g_w",
            shifted: true
        }
    ];

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-16 py-16 lg:py-24 mt-20">
                <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-content mb-6 uppercase leading-none">
                            Selected <br /> Works
                        </h1>
                        <p className="text-muted text-lg max-w-md leading-relaxed font-light">
                            A curated showcase of architectural precision and structural fabrication excellence.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 border-b border-subtle pb-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                        <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary whitespace-nowrap">All</button>
                        <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted hover:text-content transition-colors whitespace-nowrap">Architecture</button>
                        <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted hover:text-content transition-colors whitespace-nowrap">Fabrication</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative cursor-pointer overflow-hidden aspect-[4/5] bg-sub rounded-lg transition-transform duration-500 hover:shadow-2xl hover:shadow-primary/5 ${project.shifted ? 'lg:translate-y-12' : ''
                                }`}
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{project.category}</p>
                                <h3 className="text-white text-2xl font-bold leading-tight uppercase tracking-tight">{project.title}</h3>
                                <p className="text-white/40 text-xs font-mono mt-2 tracking-widest">{project.year}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-48 mb-24 flex justify-center">
                    <button className="group flex items-center gap-4 bg-content text-base hover:bg-primary transition-all duration-500 py-6 px-12 rounded uppercase text-[10px] font-bold tracking-[0.4em] shadow-xl hover:shadow-primary/20">
                        View More Projects
                        <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
