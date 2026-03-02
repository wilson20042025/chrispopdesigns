'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Inquiry sent. Our team will contact you shortly.");
    };

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col selection:bg-primary selection:text-white transition-colors duration-500">
            <Header />

            <main className="flex-1 mt-20">
                {/* Hero / Intro Section */}
                <section className="pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block animate-fade-in">
                            Connect / Collaborate
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-content uppercase leading-none mb-8 animate-fade-in-up">
                            Let's Build <br /> Something.
                        </h1>
                        <p className="text-xl md:text-2xl text-content/70 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                            Whether you're looking for professional house plan designs, cinematic renderings, or to discuss our future fabrication capabilities, our team is ready to help.
                        </p>
                    </div>
                </section>

                {/* Contact Content Grid */}
                <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-subtle">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Information Column */}
                        <div className="lg:col-span-5 space-y-16">
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted">Offices</h3>
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold uppercase tracking-widest text-content">Liberia Office</p>
                                        <p className="text-muted text-sm font-light">ELWA, Paynesville City <br /> 1000 Monrovia, Liberia</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold uppercase tracking-widest text-content">China Fab Lab</p>
                                        <p className="text-muted text-sm font-light">Beijing <br /> 100871 Beijing, Chana</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted">Digital</h3>
                                <div className="space-y-4">
                                    <a href="mailto:hello@chrispopdesign.com" className="block text-xl hover:text-primary transition-colors border-b border-subtle pb-4">
                                        chrispopdesigns@gmail.com
                                    </a>
                                    <p className="text-muted text-sm font-light tracking-widest uppercase">+231 88 679-6691</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted">Follow</h3>
                                <div className="flex gap-8">
                                    {['WhatsApp', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                                        <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-content hover:text-primary transition-colors">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="group space-y-2 border-b border-subtle transition-all focus-within:border-primary">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-transparent py-4 text-content outline-none font-light placeholder:text-muted/30"
                                            placeholder="Your Given Name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="group space-y-2 border-b border-subtle transition-all focus-within:border-primary">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-transparent py-4 text-content outline-none font-light placeholder:text-muted/30"
                                            placeholder="email@example.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="group space-y-2 border-b border-subtle transition-all focus-within:border-primary">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Service Required</label>
                                    <select
                                        className="w-full bg-transparent py-4 text-content outline-none font-light appearance-none cursor-pointer"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    >
                                        <option value="" className="bg-base text-muted">Select a Service</option>
                                        <option value="house-plans" className="bg-base text-content">House Plan Design</option>
                                        <option value="rendering" className="bg-base text-content">3D Rendering & Viz</option>
                                        <option value="consulting" className="bg-base text-content">Design Consulting</option>
                                        <option value="fabrication" className="bg-base text-content">Specialized Fabrication</option>
                                    </select>
                                </div>

                                <div className="group space-y-2 border-b border-subtle transition-all focus-within:border-primary">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Project Inquiry</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-transparent py-4 text-content outline-none font-light resize-none placeholder:text-muted/30"
                                        placeholder="Tell us about your project goals and scope..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-content text-base px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary transition-all duration-500 shadow-xl"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
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
