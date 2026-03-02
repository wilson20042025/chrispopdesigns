import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-sub border-t border-subtle py-16 px-6 md:px-16 transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-16">
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20">
                            <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-content uppercase font-display">ChrisPopDesigns Inc</span>
                    </div>
                    <p className="text-muted text-xs md:text-sm max-w-sm mx-auto md:mx-0 font-light leading-relaxed">
                        A multi-disciplinary design firm specializing in house plan designs, cinematic renderings, and the future of architectural fabrication.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-content">Contact</h5>
                    <ul className="text-muted text-xs md:text-sm space-y-4 font-light">
                        <li className="hover:text-primary transition-colors cursor-pointer">hello@chrispopdesign.com</li>
                        <li><a href="https://wa.me/15550123456" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+1 (555) 012-3456</a></li>
                        <li>1200 Industrial Ave, Seattle</li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-content">The Firm</h5>
                    <ul className="text-muted text-xs md:text-sm space-y-4 font-light">
                        <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/portfolio">Portfolio</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/contact">Inquiries</Link></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 text-content">Follow</h5>
                    <ul className="text-muted text-xs md:text-sm space-y-4 font-light">
                        <li><Link className="hover:text-primary transition-colors" href="#">Instagram</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">LinkedIn</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="#">Behance</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-widest text-muted text-center md:text-left">
                <span>© 2024 ChrisPopDesigns Inc. All rights reserved.</span>
                <span className="text-muted/50">Design by ChrisPopDesigns Digital</span>
            </div>
        </footer>
    );
}
