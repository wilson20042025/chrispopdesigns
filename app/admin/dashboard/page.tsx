export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from 'next/link'
import prisma from '@/lib/prisma'
import { Plus, Edit, Trash2, LayoutDashboard } from 'lucide-react'

async function getProjects() {
    return await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    })
}

export default async function AdminDashboard() {
    const projects = await getProjects()

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-black text-white rounded-xl">
                            <LayoutDashboard size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black uppercase tracking-tighter">Admin Dashboard</h1>
                            <p className="text-gray-500 text-sm">Manage your architecture portfolio projects</p>
                        </div>
                    </div>

                    <Link
                        href="/admin/projects/new"
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
                    >
                        <Plus size={18} />
                        New Project
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {projects.length === 0 ? (
                        <div className="bg-white p-20 rounded-2xl border border-dashed border-gray-200 text-center">
                            <p className="text-gray-400">No projects found. Start by creating your first one.</p>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Title</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Type</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Date</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {projects.map((project: any) => (
                                        <tr key={project.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4 font-bold text-gray-900">{project.title}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                    {project.type.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 font-mono text-sm">
                                                {new Date(project.date).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/projects/edit/${project.id}`}
                                                        className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-all"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    {/* Note: Delete logic should be handled by a client component or server action */}
                                                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
