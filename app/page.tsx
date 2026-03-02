import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-display bg-base text-content antialiased selection:bg-primary selection:text-white transition-colors duration-500">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/80 to-base z-10 transition-colors duration-500"></div>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
              alt="Minimalist modern glass skyscraper corner architecture"
              fill
              className="object-cover opacity-60 dark:opacity-40 grayscale"
              priority
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl">
            <p className="text-[10px] md:text-sm uppercase tracking-[0.5em] text-muted mb-8 font-light">Precision Engineering</p>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extralight tracking-tighter text-content leading-tight md:leading-none mb-12">
              Vision Meets <br />
              <span className="font-bold">Realization.</span>
            </h1>
            <div className="flex justify-center">
              <Link href="/portfolio" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold text-content border-b border-content/20 pb-2 hover:border-primary transition-all">
                View Portfolio
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-sub border-y border-subtle transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-16 max-w-2xl text-center md:text-left">
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
              <h2 className="text-2xl md:text-5xl font-bold tracking-tighter text-content mb-6 leading-tight">Mastering the intersection of <br className="hidden md:block" />vision and execution.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group space-y-6 p-8 md:p-10 bg-exp-bg border border-subtle hover:border-primary/50 transition-all duration-500 shadow-2xl">
                <div className="w-16 h-16 bg-exp-icon-bg flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <span className="text-exp-icon text-3xl material-symbols-outlined">architecture</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-exp-content">Design</h3>
                <p className="text-exp-muted text-sm md:text-base font-light leading-relaxed">Comprehensive house plan designs and architectural drafting for modern living.</p>
              </div>
              <div className="group space-y-6 p-8 md:p-10 bg-exp-bg border border-subtle hover:border-primary/50 transition-all duration-500 shadow-2xl">
                <div className="w-16 h-16 bg-exp-icon-bg flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <span className="text-exp-icon text-3xl material-symbols-outlined">view_in_ar</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-exp-content">Rendering</h3>
                <p className="text-exp-muted text-sm md:text-base font-light leading-relaxed">Hyper-realistic 3D house designs and cinematic renderings that bring visions to life.</p>
              </div>
              <div className="group space-y-6 p-8 md:p-10 bg-exp-bg border border-subtle hover:border-primary/50 transition-all duration-500 shadow-2xl">
                <div className="w-16 h-16 bg-exp-icon-bg flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <span className="text-exp-icon text-3xl material-symbols-outlined">precision_manufacturing</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-exp-content">Fabrication</h3>
                <p className="text-exp-muted text-sm md:text-base font-light leading-relaxed">Our evolving frontier: bridging architectural design with bespoke physical assembly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-24 bg-base border-b border-subtle transition-colors duration-500" id="projects">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-12 text-center md:text-left">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted mb-4 block">Selected Works</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-content">Our Portfolio.</h2>
            </div>
            <div className="flex overflow-x-auto pb-12 gap-5 md:gap-6 snap-x no-scrollbar">
              {/* Project 1 */}
              <Link href="/portfolio/the-monolith" className="min-w-[85vw] md:min-w-[400px] snap-start group">
                <div className="aspect-video w-full relative overflow-hidden mb-4 shadow-xl shadow-black/5">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU"
                    alt="Monolithic concrete and metal pavilion structure"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-[280px]">
                    <h3 className="text-base md:text-lg font-bold tracking-tight mb-1 uppercase text-content group-hover:text-primary transition-colors">The Monolith Pavilion</h3>
                    <p className="text-muted text-[10px] font-light leading-relaxed"> Reykjavik Arts Center.</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted tracking-widest mt-1 uppercase">2023</span>
                </div>
              </Link>
              {/* Project 2 */}
              <Link href="/portfolio/glass-atrium" className="min-w-[85vw] md:min-w-[400px] snap-start group">
                <div className="aspect-video w-full relative overflow-hidden mb-4 shadow-xl shadow-black/5">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
                    alt="Modern glass and steel office facade"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-[280px]">
                    <h3 className="text-base md:text-lg font-bold tracking-tight mb-1 uppercase text-content group-hover:text-primary transition-colors">Glass Spine Tower</h3>
                    <p className="text-muted text-[10px] font-light leading-relaxed">Corporate headquarters.</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted tracking-widest mt-1 uppercase">2022</span>
                </div>
              </Link>
              {/* Project 3 */}
              <Link href="/portfolio/kinetic-timber" className="min-w-[85vw] md:min-w-[400px] snap-start group">
                <div className="aspect-video w-full relative overflow-hidden mb-4 shadow-xl shadow-black/5">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwel83yexCP55LtI72ogmeT5ABAyTkeEYbyCCPnaBOx2cZHaCdaQlEZorwim6UO3-eC_j-YUinH0AhJVU9wgn2SJjuRwTCUDFhXipVIyneVZ4F-7o_g_8HcurlbykI2-UVQoHlFcvJxuZviP9Vj1bqDW6bfR6RKkEFYY1WI89kPQZCuHbqcGrrjNWKpsatV0B_uNlguuzfWENGdIwE-0PWKEg3GphFpABmLrFQbsFTWXRmyeZd0zG0p2_PdLbQehGXg2H27a64eNU"
                    alt="Computational wood structure"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-[280px]">
                    <h3 className="text-base md:text-lg font-bold tracking-tight mb-1 uppercase text-content group-hover:text-primary transition-colors">Kinetic Timber</h3>
                    <p className="text-muted text-[10px] font-light leading-relaxed">Research facility.</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted tracking-widest mt-1 uppercase">2023</span>
                </div>
              </Link>
              {/* Project 4 */}
              <Link href="/portfolio/neural-steel" className="min-w-[85vw] md:min-w-[400px] snap-start group">
                <div className="aspect-video w-full relative overflow-hidden mb-4 shadow-xl shadow-black/5">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzAaA0lJ62emswelaz-jxuZtZTMMoya5H5WiPBrbh4V_012rfrH0w-2e61r1gmUEckq21fK59gdy5TdIdu-1P2UbI4wCu11hWntYRmP2HYf8tnXQIC_7vqMI76czpdBbqXZVWMHbXJM39x32idYMcQAXgUIdbbW2FrfH3ua8UwV3iWgJmJ9uZQZr61qJCfnFw3A0gI2B94kShm-BBUhL9GsRqmLPK2nzdaY28vBfQZORO8T4YjLqqMHyn9k7GDsujB-FaYLynLo"
                    alt="Precision metal fabrication"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-[280px]">
                    <h3 className="text-base md:text-lg font-bold tracking-tight mb-1 uppercase text-content group-hover:text-primary transition-colors">Neural Steel</h3>
                    <p className="text-muted text-[10px] font-light leading-relaxed">Custom metal fabrication.</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted tracking-widest mt-1 uppercase">2024</span>
                </div>
              </Link>
            </div>
            <div className="mt-16 flex justify-center">
              <Link href="/portfolio" className="group flex items-center gap-4 bg-content text-base hover:bg-primary transition-all duration-500 py-5 px-10 uppercase text-[10px] font-bold tracking-[0.4em] shadow-xl hover:shadow-primary/20">
                View All Projects
                <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-6 md:px-16 bg-base text-center transition-colors duration-500" id="contact">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-content mb-6">Ready to Build?</h2>
            <p className="text-muted text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-8">Transforming complex visions into tangible structures through the intersection of design and craft.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/15550123456?text=Hi, I'm interested in starting an architectural project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all text-center"
              >
                Start Project
              </a>
              <button className="border border-subtle hover:bg-sub text-content px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all">Download Brochure</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
