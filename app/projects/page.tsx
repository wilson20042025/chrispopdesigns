'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Filter, SortDesc, SortAsc } from 'lucide-react'

const PROJECT_TYPES = ['ALL', 'FABRICATION', 'FLOOR_PLAN', 'HOUSE_PLAN', 'RENDERING']

interface Project {
    id: string;
    title: string;
    type: string;
    date: string;
    brief: string;
    specType: string;
    specValue: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('ALL')
    const [sortOrder, setSortOrder] = useState('desc') // desc = newest first

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects')
                const data = await response.json()
                setProjects(data)
            } catch (error) {
                console.error('Fetch error:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    const filteredProjects = projects
        .filter(p => filter === 'ALL' || p.type === filter)
        .sort((a, b) => {
            const dateA = new Date(a.date).getTime()
            const dateB = new Date(b.date).getTime()
            return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
        })

    return (
        <div className="font-display bg-base text-content antialiased flex min-h-screen w-full flex-col transition-colors duration-500">
            <Header />

            <main className="flex-1 mt-20 px-6 md:px-16 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-4 block animate-fade-in">
                            Portfolio
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-content uppercase leading-[0.8] mb-12">
                            Our Works.
                        </h1>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-8 border-b border-subtle">
                        <div className="flex flex-wrap gap-4 items-center">
                            <Filter size={16} className="text-muted mr-2" />
                            {PROJECT_TYPES.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border ${filter === type
                                        ? 'bg-black text-white border-black'
                                        : 'bg-transparent text-muted border-subtle hover:border-black hover:text-black'
                                        }`}
                                >
                                    {type.replace('_', ' ')}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-black transition-colors"
                        >
                            {sortOrder === 'desc' ? <SortDesc size={16} /> : <SortAsc size={16} />}
                            Sort by Date: {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
                        </button>
                    </div>

                    {/* Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="animate-pulse space-y-4">
                                    <div className="aspect-[4/5] bg-sub" />
                                    <div className="h-4 bg-sub w-1/2" />
                                    <div className="h-8 bg-sub" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {filteredProjects.map((project) => (
                                <Link
                                    href={`/projects/${project.id}`}
                                    key={project.id}
                                    className="group block space-y-6"
                                >
                                    <div className="relative aspect-[4/5] bg-sub overflow-hidden">
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                                        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{project.specType}: {project.specValue}</p>
                                            <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">View Details</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest font-mono">
                                                {project.type.replace('_', ' ')}
                                            </span>
                                            <span className="text-muted text-[10px] font-bold uppercase tracking-widest">
                                                {new Date(project.date).getFullYear()}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tighter text-content leading-tight group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted font-light text-sm line-clamp-2 leading-relaxed">
                                            {project.brief}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!loading && filteredProjects.length === 0 && (
                        <div className="text-center py-32 border border-dashed border-subtle">
                            <p className="text-muted font-light italic">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}
