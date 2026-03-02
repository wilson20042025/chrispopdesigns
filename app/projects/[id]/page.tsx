import prisma from '@/lib/prisma'
export const dynamic = 'force-dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { Calendar, Tag, HardHat, ExternalLink } from 'lucide-react'

export default async function ProjectDetailPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const project = await prisma.project.findUnique({
        where: { id }
    })

    if (!project) {
        notFound()
    }

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col">
            <Header />

            <main className="flex-1 mt-20">
                {/* Detail Hero */}
                <div className="bg-sub py-24 px-6 md:px-16 border-b border-subtle">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
                            <div className="lg:col-span-8">
                                <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                                    Project Detail / {project.type.replace('_', ' ')}
                                </span>
                                <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-content uppercase leading-[0.8] mb-8">
                                    {project.title}.
                                </h1>
                            </div>
                            <div className="lg:col-span-4 pb-4">
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4 border-l-2 border-primary pl-6">
                                        <Calendar size={18} className="text-muted" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Completion</p>
                                            <p className="text-sm font-bold uppercase">{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 border-l-2 border-primary pl-6">
                                        <Tag size={18} className="text-muted" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">{project.specType}</p>
                                            <p className="text-sm font-bold uppercase">{project.specValue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-12">
                            <div className="w-20 h-1 bg-primary mb-12" />
                            <p className="text-4xl md:text-5xl font-light leading-snug text-content max-w-4xl">
                                {project.brief}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Placeholder for Gallery / Additional Details */}
                <div className="px-6 md:px-16 max-w-[1440px] mx-auto pb-32">
                    <div className="aspect-video bg-sub border border-subtle flex items-center justify-center">
                        <div className="text-center group cursor-pointer">
                            <HardHat size={48} className="mx-auto text-muted mb-4 group-hover:text-primary transition-colors" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Advanced Visualization Coming Soon</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
