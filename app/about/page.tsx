'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {

    const team = [
        {
            name: "Gabriel Himie Wilson",
            role: "Architect & Design / Founder",
            bio: "Driving the architectural vision with over 15 years of experience in structural fabrication and parametric design.",
            image: "/gab.jpeg"
        },
        {
            name: "Roland ",
            role: "Head of 3D Visualization",
            bio: "Leading our cinematic rendering department, ensuring every architectural design is presented with life-like fidelity.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU"
        },
        {
            name: "Marcus Thorne",
            role: "Lead Architectural Designer",
            bio: "Expert in house plan designs and structural drafting, turning spatial concepts into buildable blueprints.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ5CzULKKeUsYM-QmuqzlTJqwxLAyw4o6awXp7iTTHgVt2U10onHI7vhB71J3bYlqOzAKK_ztCe4NwDwCQf6bQqVU0WKcPmmspZRhG01_NCCRsdSxP0CdJ0FiZHVBcM0z6mAjLnk1ZA4hVusj1JFWfUtW7zsIM3Z7jbVkvcWW3kS5I1-3AM6p7aSfUw1fZS3YFv7PTRFuCDftRtB5PN8_Gh9torB7h6s2DDjQMJqkv3n2-YPhtvqZnXek1Kn9PAcbmx_p9D77IVoY"
        },
        {
            name: "Sofia Chen",
            role: "Lead Design Strategist",
            bio: "Synthesizing environmental data and architectural aesthetics into cohesive and efficient spatial experiences.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
        }
    ];

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-1 mt-20">
                {/* Hero / Philosophy Section */}
                <section className="pt-24 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-12">
                            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block animate-fade-in">
                                Our Identity / Philosophy
                            </span>
                            <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-content uppercase leading-[0.8] mb-12 animate-fade-in-up">
                                About Us.
                            </h1>
                        </div>
                        <div className="lg:col-span-7">
                            <p className="text-2xl md:text-3xl text-content/90 font-light leading-snug animate-fade-in" style={{ animationDelay: '200ms' }}>
                                A multi-disciplinary design firm where <span className="font-bold border-b-2 border-primary/30">house plan precision</span> intersects with <span className="font-bold border-b-2 border-primary/30">cinematic 3D visualization.</span>
                            </p>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="text-muted text-lg font-light leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                                Founded at the crossroads of architecture and digital art, our firm specializes in crafting detailed house designs and realistic renderings. While our core is digital, we are actively researching the tools of physical fabrication to one day build what we visualize.
                            </p>
                        </div>
                    </div>
                </section>



                {/* Redesigned Team Section */}
                <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Our Excellence</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-content leading-none">Meet Our Team.</h2>
                        </div>
                        <p className="text-muted text-sm max-w-xs font-light leading-relaxed">
                            A collective of experts bridging the gap between digital vision and physical assembly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-subtle">
                        {team.map((member, i) => (
                            <div key={i} className="group relative border-r border-b border-subtle aspect-[4/3] md:aspect-[3/4] overflow-hidden flex flex-col justify-end p-8">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                                </div>

                                <div className="relative z-10 space-y-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="space-y-1">
                                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] font-mono">{member.role}</p>
                                        <h3 className="text-white text-2xl font-bold uppercase tracking-tight">{member.name}</h3>
                                    </div>
                                    <p className="text-white/60 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                        {member.bio}
                                    </p>
                                    <div className="pt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                                        <div className="w-8 h-px bg-white/20 my-auto"></div>
                                        <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Connect</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 border-t border-subtle">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-content mb-12">Let's craft the <br /> future together.</h2>
                        <a
                            href="https://wa.me/15550123456?text=Hi, I'm interested in collaborating on a design project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-content text-base px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary transition-all duration-500 shadow-xl text-center"
                        >
                            Start a Collaboration
                        </a>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
